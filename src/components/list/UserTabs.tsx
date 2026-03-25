import { useState } from 'react';
import { AllUserList } from './AllUserList';
import { StudentList } from './StudentList';
import { MentorList } from './MentorList';
import { Student, type AllUser, type Mentor } from '../../types/User';

type TabType = 'all' | 'student' | 'mentor';

type Props = {
  allUsers: AllUser[];
};

export const UserTabs = ({ allUsers }: Props) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const rawStudents = allUsers.filter(
    (u): u is Student => u.role === 'student',
  );

  const rawMentors = allUsers.filter((u): u is Mentor => u.role === 'mentor');

  // 過去に以下のような関数を定義していたが、タブによって結果を返すより、インスタンス化されたものをfilterかける方が可読性がいいと思った
  // const displayUsers = allInstances.filter((user) => {
  //   if (activeTab === 'all') return true;
  //   return user.role === activeTab;
  // });

  const students = rawStudents.map((s) => {
    const matchedMentorNames = s.getMatchedMentorNames(rawMentors);

    // 2. インスタンスのプロパティ(matchedMentor)に直接代入
    // ...s というインスタンスのコピーしてオブジェクトを作成すると、メソッドが消えてしまう
    // StudentDataでmatchedMentorはstring[]と定義されているので、配列にして入れます
    s.matchedMentor = [matchedMentorNames];

    // 3. インスタンスそのものを返す（これで型が Student のまま維持される）
    return s;
  });

  const mentors = rawMentors.map((m) => {
    const matchedStudentNames = m.getMatchedStudentNames(rawStudents);
    m.matchedStudent = [matchedStudentNames];
    return m;
  });

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={activeTab === 'all'}
          onChange={() => setActiveTab('all')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          全員
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={activeTab === 'student'}
          onChange={() => setActiveTab('student')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          生徒のみ
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          checked={activeTab === 'mentor'}
          onChange={() => setActiveTab('mentor')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          メンターのみ
        </label>
      </div>

      {activeTab === 'all' && <AllUserList allUsers={allUsers} />}
      {activeTab === 'student' && <StudentList students={students} />}
      {activeTab === 'mentor' && <MentorList mentors={mentors} />}
    </>
  );
};

import { useState } from 'react';
import { AllUserList } from './AllUserList';
import { StudentList } from './StudentList';
import { MentorList } from './MentorList';
import type { Mentor, Student } from '../../types/User';

type TabType = 'all' | 'student' | 'mentor';

export const UserTabs = ({ allUsers }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  // 過去に以下のような関数を定義していたが、タブによって結果を返すより、インスタンス化されたものをfilterかける方が可読性がいいと思った
  // const displayUsers = allInstances.filter((user) => {
  //   if (activeTab === 'all') return true;
  //   return user.role === activeTab;
  // });
  // const allUsers = allInstances;
  const students = allUsers.filter(
    (user): user is Student => user.role === 'student',
  );
  const mentors = allUsers.filter(
    (user): user is Mentor => user.role === 'mentor',
  );

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

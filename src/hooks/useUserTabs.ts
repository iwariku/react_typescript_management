import { useState } from 'react';
import { Mentor, Student, type AllUser } from '../types/User';

type TabType = 'all' | 'student' | 'mentor';

type Props = {
  allUsers: AllUser[];
};

export const useUserTabs = ({ allUsers }: Props) => {
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

    // 2-1 インスタンスのプロパティ(matchedMentor)に直接代入
    // ...s というインスタンスのコピーしてオブジェクトを作成すると、メソッドが消えてしまう
    // StudentDataでmatchedMentorはstring[]と定義されているので、配列にして入れます

    // 2-2. stateを直接変更するのは「Stateは不変に扱う」とう原則に反するため、以下の文は使わない。
    // s.matchedMentor = [matchedMentorNames];

    // 2-3 1と2の理由により、新しいインスタンスを作成するやり方にする
    // s を展開しつつ、対応するメンターを上書きしたオブジェクトを渡す
    const newStudent = new Student({
      ...s,
      matchedMentor: [matchedMentorNames],
    });

    // 3. 新しく作成したインスタンスを返す（これで型が Student のまま維持される）
    return newStudent;
  });

  const mentors = rawMentors.map((m) => {
    const matchedStudentNames = m.getMatchedStudentNames(rawStudents);
    const newMentor = new Mentor({
      ...m,
      matchedStudent: [matchedStudentNames],
    });
    return newMentor;
  });

  const displayAllUsers = [...students, ...mentors].sort((a, b) => a.id - b.id);

  return {
    activeTab,
    setActiveTab,
    students,
    mentors,
    displayAllUsers,
  };
};

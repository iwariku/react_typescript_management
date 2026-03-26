import { useState } from 'react';
import type { AllUser, Mentor, Student } from '../types/User';

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

  return {
    activeTab,
    setActiveTab,
    students,
    mentors,
  };
};

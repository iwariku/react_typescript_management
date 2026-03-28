import { useState } from 'react';
import type { Mentor, Student } from '../types/User';
import { initialUsers } from '../data';

export const useUsers = () => {
  // データはAppで保持する -> 一番上でデータを保持する
  // すべてのトップになるので、共通の親クラスであるAllUser型にする
  const [users, setUsers] = useState<(Student | Mentor)[]>(initialUsers);

  //
  const handleAddUser = (newUser: Student | Mentor) => {
    console.log(newUser);
    setUsers([...users, newUser]);
  };

  return {
    users,
    handleAddUser,
  };
};

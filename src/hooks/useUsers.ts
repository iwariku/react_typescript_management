import { useState } from 'react';
import { allInstances } from '../data';
import type { AllUser, Mentor, Student } from '../types/User';

export const useUsers = () => {
  // データはAppで保持する -> 一番上でデータを保持する
  // すべてのトップになるので、共通の親クラスであるAllUser型にする
  const [users, setUsers] = useState<AllUser[]>(allInstances);

  //
  const handleAddUser = (newUser: Student | Mentor) => {
    setUsers([...users, newUser]);
  };

  return {
    users,
    handleAddUser,
  };
};

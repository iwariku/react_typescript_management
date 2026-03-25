import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import { CreateUser } from './components/form/CreateUser';
import { UserTabs } from './components/list/UserTabs';

import { allInstances } from './data';
import type { AllUser, Mentor, Student } from './types/User';

function App() {
  // データはAppで保持する -> 一番上でデータを保持する
  // すべてのトップになるので、共通の親クラスであるAllUser型にする
  const [users, setUsers] = useState<AllUser[]>(allInstances);

  //
  const handleAddUser = (newUser: Student | Mentor) => {
    console.log('3. App.tsx: 親にデータが届きました', newUser);
    setUsers([...users, newUser]);
  };

  console.log('4. App.tsx: 現在の全ユーザー数', users.length);

  return (
    <>
      <CreateUser onAddUser={handleAddUser} />
      <UserTabs allUsers={users} />
    </>
  );
}

export default App;

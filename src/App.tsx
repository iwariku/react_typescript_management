import { useState } from 'react';
import { CreateUser } from './components/form/CreateUser';

import 'bootstrap/dist/css/bootstrap.css';
import { UserTabs } from './components/list/UserTabs';
import { allInstances } from './data';

function App() {
  // データはAppで保持する？
  const [users, setUsers] = useState<object[]>(allInstances);

  const handleAddUser = (newUser) => {
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

import 'bootstrap/dist/css/bootstrap.css';

import { CreateUser } from './components/form/CreateUser';
import { UserTabs } from './components/list/UserTabs';
import { useUsers } from './hooks/useUsers';

function App() {
  const { users, handleAddUser } = useUsers();

  return (
    <>
      <CreateUser onAddUser={handleAddUser} />
      <UserTabs allUsers={users} />
    </>
  );
}

export default App;

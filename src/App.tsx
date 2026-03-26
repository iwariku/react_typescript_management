import 'bootstrap/dist/css/bootstrap.css';

import { CreateUser } from './components/form/CreateUser';
import { UserTabs } from './components/list/UserTabs';
import { useApp } from './hooks/useApp';

function App() {
  const { users, handleAddUser } = useApp();

  return (
    <>
      <CreateUser onAddUser={handleAddUser} />
      <UserTabs allUsers={users} />
    </>
  );
}

export default App;

import type { AllUser } from '../types';

type Props = {
  allUsers: AllUser[];
};

export const AllUserList = ({ allUsers }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">名前</th>
            <th scope="col">ロール</th>
            <th scope="col">メールアドレス</th>
            <th scope="col">年齢</th>
            <th scope="col">郵便番号</th>
            <th scope="col">電話番号</th>
            <th scope="col">趣味</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.postCode}</td>
              <td>{user.phone}</td>
              <td>{user.hobbies}</td>
              <td>{user.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

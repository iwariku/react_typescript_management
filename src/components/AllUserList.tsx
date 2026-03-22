import type { AllUser } from '../types';
import { Mentor, Student } from '../types';

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

            <th scope="col">勉強時間</th>
            <th scope="col">課題番号</th>
            <th scope="col">勉強中の言語</th>
            <th scope="col">ハピネススコア</th>
            <th scope="col">対応可能なメンター</th>

            <th scope="col">実務経験年数</th>
            <th scope="col">現場で使っている言語</th>
            <th scope="col">担当できる課題番号の始め</th>
            <th scope="col">担当できる課題番号の終わり</th>
            <th scope="col">対応可能な生徒</th>
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

              <td>{user instanceof Student ? `${user.studyMinutes}` : ''}</td>
              <td>{user instanceof Student ? `${user.taskCode}` : ''}</td>
              <td>{user instanceof Student ? `${user.studyLangs}` : ''}</td>
              <td>{user instanceof Student ? `${user.score}` : ''}</td>
              <td>生徒仮</td>

              <td>{user instanceof Mentor ? `${user.experienceDays}` : ''}</td>
              <td>{user instanceof Mentor ? `${user.useLangs}` : ''}</td>
              <td>
                {user instanceof Mentor ? `${user.availableStartCode}` : ''}
              </td>
              <td>
                {user instanceof Mentor ? `${user.availableEndCode}` : ''}
              </td>
              <td>メンター仮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

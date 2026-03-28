import { useMentorSort } from '../../hooks/useMentorSort';
import type { Mentor } from '../../types/User';

type Props = {
  mentors: Mentor[];
};

export const MentorList = ({ mentors }: Props) => {
  const { sortOrder, sortedMentors, handleSort } = useMentorSort({ mentors });

  return (
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
          <th onClick={handleSort} style={{ cursor: 'pointer' }}>
            実務経験月数
            {sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '♢'}
          </th>
          <th scope="col">現場で使っている言語</th>
          <th scope="col">担当できる課題番号の始め</th>
          <th scope="col">担当できる課題番号の終わり</th>
          <th scope="col">対応可能な生徒</th>
        </tr>
      </thead>
      <tbody>
        {sortedMentors.map((mentor) => (
          <tr key={mentor.id}>
            <td>{mentor.name}</td>
            <td>{mentor.role}</td>
            <td>{mentor.email}</td>
            <td>{mentor.age}</td>
            <td>{mentor.postCode}</td>
            <td>{mentor.phone}</td>
            <td>{mentor.hobbies}</td>
            <td>{mentor.url}</td>
            <td>{Math.floor(mentor.experienceDays / 30)}ヶ月</td>
            <td>{mentor.useLangs}</td>
            <td>{mentor.availableStartCode}</td>
            <td>{mentor.availableEndCode}</td>
            <td>{mentor.matchedStudent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

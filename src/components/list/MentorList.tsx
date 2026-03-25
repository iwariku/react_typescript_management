import { useState } from 'react';
import type { Mentor } from '../../types/User';

type Props = {
  mentors: Mentor[];
};

type SortOrder = 'asc' | 'desc' | undefined;

export const MentorList = ({ mentors }: Props) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  const sortedMentors = [...mentors].sort((a, b) => {
    if (sortOrder === undefined) return a.id - b.id;

    // 実務経験を月表記で
    const monthA = a.experienceDays / 30;
    const monthB = b.experienceDays / 30;

    // 昇順なら (A - B) / 降順なら(B - A)
    return sortOrder === 'asc' ? monthA - monthB : monthB - monthA;
  });

  const toggleSort = () => {
    if (sortOrder === undefined) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(undefined);
    }
  };

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
          <th onClick={toggleSort} style={{ cursor: 'pointer' }}>
            実務経験年数
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
            <td>対応可能な生徒の処理結果</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

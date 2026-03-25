import { useState } from 'react';
import type { Student } from '../../types/User';

type Props = {
  students: Student[];
};

type SortKey = 'studyMinutes' | 'score' | undefined;
type SortOrder = 'asc' | 'desc' | undefined;

export const StudentList = ({ students }: Props) => {
  const [sortKey, setSortKey] = useState<SortKey>(undefined);
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  // ソートロジック
  const sortedStudents = [...students].sort((a, b) => {
    if (!sortKey || !sortOrder) return a.id - b.id;

    // sortKeyによってどちらの項目を選択しているかを判断する
    const valA = sortKey === 'studyMinutes' ? a.studyMinutes : a.score;
    const valB = sortKey === 'studyMinutes' ? b.studyMinutes : b.score;

    return sortOrder === 'asc' ? valA - valB : valB - valA;
  });

  // ソートボタンのクリックイベント
  const handleSort = (key: SortKey) => {
    // 別の項目がクリックされたら(時間 -> スコア)選択された項目を「昇順」にする
    if (sortKey !== key) {
      setSortKey(key);
      setSortOrder('asc');
      return;
    }

    // 同じ項目がクリックされたら、今の状態を見て昇順 -> 降順 -> ソートなしになるようにする
    if (sortOrder === undefined) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(undefined);
      setSortKey(undefined);
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
          <th onClick={() => handleSort('studyMinutes')}>
            勉強時間{' '}
            {sortKey === 'studyMinutes' &&
              (sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '🍎')}
          </th>
          <th scope="col">課題番号</th>
          <th scope="col">勉強中の言語</th>
          <th onClick={() => handleSort('score')}>
            スコア{' '}
            {sortKey === 'score' &&
              (sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '🍎')}
          </th>
          <th scope="col">対応可能なメンター</th>
        </tr>
      </thead>
      <tbody>
        {sortedStudents.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.role}</td>
            <td>{student.email}</td>
            <td>{student.age}</td>
            <td>{student.postCode}</td>
            <td>{student.phone}</td>
            <td>{student.hobbies}</td>
            <td>{student.url}</td>
            <td>{student.studyMinutes}</td>
            <td>{student.taskCode}</td>
            <td>{student.studyLangs}</td>
            <td>{student.score}</td>
            <td>対応可能なメンターの処理結果</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

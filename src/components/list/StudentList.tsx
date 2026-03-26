import { type Student } from '../../types/User';
import { useStudentSort } from '../../hooks/useStudentSort';

type Props = {
  students: Student[];
};

export const StudentList = ({ students }: Props) => {
  const { sortKey, sortOrder, sortedStudents, handleSort } = useStudentSort({
    students,
  });

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
          <th
            onClick={() => handleSort('studyMinutes')}
            style={{ cursor: 'pointer' }}
          >
            勉強時間(分){' '}
            {sortKey === 'studyMinutes'
              ? sortOrder === 'asc'
                ? '▲'
                : '▼'
              : '♢'}
          </th>
          <th scope="col">課題番号</th>
          <th scope="col">勉強中の言語</th>
          <th onClick={() => handleSort('score')} style={{ cursor: 'pointer' }}>
            スコア{' '}
            {sortKey === 'score' ? (sortOrder === 'asc' ? '▲' : '▼') : '♢'}
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
            <td>{student.matchedMentor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

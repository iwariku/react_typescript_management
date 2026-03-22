import type { Student } from '../types';

type Props = {
  students: Student[];
};

export const StudentList = ({ students }: Props) => {
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
          <th scope="col">勉強時間</th>
          <th scope="col">課題番号</th>
          <th scope="col">勉強中の言語</th>
          <th scope="col">ハピネススコア</th>
          <th scope="col">対応可能なメンター</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
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

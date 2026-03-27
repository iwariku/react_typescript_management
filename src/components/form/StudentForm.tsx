import React, { useState } from 'react';
import { Student, type StudentData } from '../../types/User';

type Props = {
  onAddUser: (newUser: Student) => void;
};

export const StudentForm = ({ onAddUser }: Props) => {
  const initialStudentValues: StudentData = {
    id: 0,
    name: '',
    role: 'student' as const,
    email: '',
    age: 0,
    postCode: '',
    phone: '',
    hobbies: [],
    url: '',
    studyMinutes: 0,
    taskCode: 0,
    studyLangs: [],
    score: 0,
  };

  const [field, setField] = useState<StudentData>(initialStudentValues);

  const onChangeField = <K extends keyof StudentData>(
    key: K,
    value: StudentData[K],
  ) => {
    setField((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const hobbiesStr = Array.isArray(field.hobbies)
      ? field.hobbies.join(',') // 万が一配列だった場合は文字列に戻す（安全策）
      : field.hobbies; // 文字列ならそのまま使う

    const studyLangsStr = Array.isArray(field.studyLangs)
      ? field.studyLangs.join(',')
      : field.studyLangs;

    const hobbyArray = hobbiesStr.split(',').map((s) => s.trim());
    const studyLangArray = studyLangsStr.split(',').map((s) => s.trim());

    const studentParams: StudentData = {
      ...field,
      id: Date.now(),
      hobbies: hobbyArray,
      studyLangs: studyLangArray,
    };

    const newStudent = new Student(studentParams);
    onAddUser(newStudent);

    alert('追加できました');
    console.log(newStudent);
  };

  return (
    <div className="p-3 border">
      <h2>生徒登録フォーム</h2>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>名前</label>
          <input
            required
            className="form-control"
            value={field.name}
            onChange={(e) => onChangeField('name', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>メールアドレス</label>
          <input
            required
            className="form-control"
            value={field.email}
            onChange={(e) => onChangeField('email', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>年齢</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.age}
            onChange={(e) => onChangeField('age', parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>郵便番号</label>
          <input
            required
            className="form-control"
            value={field.postCode}
            onChange={(e) => onChangeField('postCode', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>電話番号</label>
          <input
            required
            className="form-control"
            value={field.phone}
            onChange={(e) => onChangeField('phone', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>趣味</label>
          <input
            required
            className="form-control"
            value={field.hobbies}
            onChange={(e) => onChangeField('hobbies', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>URL</label>
          <input
            required
            className="form-control"
            value={field.url}
            onChange={(e) => onChangeField('url', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>勉強時間(分)</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.studyMinutes}
            onChange={(e) =>
              onChangeField('studyMinutes', parseInt(e.target.value))
            }
          />
        </div>

        <div className="mb-3">
          <label>課題番号</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.taskCode}
            onChange={(e) =>
              onChangeField('taskCode', parseInt(e.target.value))
            }
          />
        </div>

        <div className="mb-3">
          <label>勉強中の言語</label>
          <input
            required
            className="form-control"
            value={field.studyLangs}
            onChange={(e) => onChangeField('studyLangs', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>ハピネススコア</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.score}
            onChange={(e) => onChangeField('score', parseInt(e.target.value))}
          />
        </div>

        <button className="btn btn-primary">生徒登録</button>
      </form>
    </div>
  );
};

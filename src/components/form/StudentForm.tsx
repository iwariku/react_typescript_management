import React, { useState } from 'react';
import { Student } from '../../types/User';

type Props = {
  onAddUser: (newUser: Student) => void;
};

export const StudentForm = ({ onAddUser }: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phone, setPhone] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [url, setUrl] = useState('');

  const [studyMinutes, setStudyMinutes] = useState(0);
  const [taskCode, setTaskCode] = useState(0);
  const [studyLangs, setStudyLangs] = useState('');
  const [score, setScore] = useState(0);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const hobbyArray = hobbies.split(',').map((s) => s.trim());
    const studyLangArray = studyLangs.split(',').map((s) => s.trim());

    const dataForStudent = {
      id: Date.now(),
      name: name,
      role: 'student' as const,
      email: email,
      age: age,
      postCode: postCode,
      phone: phone,
      hobbies: hobbyArray,
      url: url,
      studyMinutes: studyMinutes,
      taskCode: taskCode,
      studyLangs: studyLangArray,
      score: score,
    };

    const newStudent = new Student(dataForStudent);
    onAddUser(newStudent);

    alert('追加できました');
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>メールアドレス</label>
          <input
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>年齢</label>
          <input
            required
            className="form-control"
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>郵便番号</label>
          <input
            required
            className="form-control"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>電話番号</label>
          <input
            required
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>趣味</label>
          <input
            required
            className="form-control"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>URL</label>
          <input
            required
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>勉強時間(分)</label>
          <input
            required
            className="form-control"
            type="number"
            value={studyMinutes}
            onChange={(e) => setStudyMinutes(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>課題番号</label>
          <input
            required
            className="form-control"
            type="number"
            value={taskCode}
            onChange={(e) => setTaskCode(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>勉強中の言語</label>
          <input
            required
            className="form-control"
            value={studyLangs}
            onChange={(e) => setStudyLangs(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>ハピネススコア</label>
          <input
            required
            className="form-control"
            type="number"
            value={score}
            onChange={(e) => setScore(parseInt(e.target.value))}
          />
        </div>

        <button className="btn btn-primary">生徒登録</button>
      </form>
    </div>
  );
};

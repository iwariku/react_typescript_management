import React, { useState } from 'react';
import { Mentor } from '../../types/User';

type Props = {
  onAddUser: (newUser: Mentor) => void;
};

export const MentorForm = ({ onAddUser }: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phone, setPhone] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [url, setUrl] = useState('');

  const [experienceDays, setExperienceDays] = useState(0);
  const [useLangs, setUseLangs] = useState('');
  const [availableStartCode, setAvailableStartCode] = useState(0);
  const [availableEndCode, setAvailableEndCode] = useState(0);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const hobbyArray = hobbies.split(',').map((s) => s.trim());
    const useLangsArray = useLangs.split(',').map((s) => s.trim());

    const dataForMentor = {
      id: Date.now(),
      name: name,
      role: 'mentor' as const,
      email: email,
      age: age,
      postCode: postCode,
      phone: phone,
      hobbies: hobbyArray,
      url: url,
      experienceDays: experienceDays,
      useLangs: useLangsArray,
      availableStartCode: availableStartCode,
      availableEndCode: availableEndCode,
    };

    const newMentor = new Mentor(dataForMentor);
    onAddUser(newMentor);

    alert('追加できました');
  };

  return (
    <div className="p-3 border">
      <h2>メンター登録フォーム</h2>

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
          <label>実務経験月数</label>
          <input
            required
            className="form-control"
            type="number"
            value={experienceDays}
            onChange={(e) => setExperienceDays(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>現場で使っている言語</label>
          <input
            required
            className="form-control"
            value={useLangs}
            onChange={(e) => setUseLangs(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>担当できる課題番号の始め</label>
          <input
            required
            className="form-control"
            type="number"
            value={availableStartCode}
            onChange={(e) => setAvailableStartCode(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label>担当できる課題番号の終わり</label>
          <input
            required
            className="form-control"
            type="number"
            value={availableEndCode}
            onChange={(e) => setAvailableEndCode(parseInt(e.target.value))}
          />
        </div>

        <button className="btn btn-primary">メンター登録</button>
      </form>
    </div>
  );
};

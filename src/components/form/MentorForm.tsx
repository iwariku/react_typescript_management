import React, { useState } from 'react';
import { Mentor, type MentorData } from '../../types/User';

type Props = {
  onAddUser: (newUser: Mentor) => void;
};

export const MentorForm = ({ onAddUser }: Props) => {
  const initialMentorValues: MentorData = {
    id: 0,
    name: '',
    role: 'mentor' as const,
    email: '',
    age: 0,
    postCode: '',
    phone: '',
    hobbies: [],
    url: '',
    experienceDays: 0,
    useLangs: [],
    availableStartCode: 0,
    availableEndCode: 0,
  };

  const [field, setField] = useState<MentorData>(initialMentorValues);

  const onChangeField = <K extends keyof MentorData>(
    key: K,
    value: MentorData[K],
  ) => {
    setField((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const hobbiesStr = Array.isArray(field.hobbies)
      ? field.hobbies.join(',') // 万が一配列だった場合は文字列に戻す（安全策）
      : field.hobbies; // 文字列ならそのまま使う

    const useLangsStr = Array.isArray(field.useLangs)
      ? field.useLangs.join(',')
      : field.useLangs;

    const hobbyArray = hobbiesStr.split(',').map((s) => s.trim());
    const useLangArray = useLangsStr.split(',').map((s) => s.trim());

    const mentorParams: MentorData = {
      ...field,
      id: Date.now(),
      hobbies: hobbyArray,
      useLangs: useLangArray,
    };

    const newMentor = new Mentor(mentorParams);
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
          <label>実務経験月数</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.experienceDays}
            onChange={(e) =>
              onChangeField('experienceDays', parseInt(e.target.value))
            }
          />
        </div>

        <div className="mb-3">
          <label>現場で使っている言語</label>
          <input
            required
            className="form-control"
            value={field.useLangs}
            onChange={(e) => onChangeField('useLangs', e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>担当できる課題番号の始め</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.availableStartCode}
            onChange={(e) =>
              onChangeField('availableStartCode', parseInt(e.target.value))
            }
          />
        </div>

        <div className="mb-3">
          <label>担当できる課題番号の終わり</label>
          <input
            required
            className="form-control"
            type="number"
            value={field.availableEndCode}
            onChange={(e) =>
              onChangeField('availableEndCode', parseInt(e.target.value))
            }
          />
        </div>

        <button className="btn btn-primary">メンター登録</button>
      </form>
    </div>
  );
};

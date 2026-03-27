import { useMentorForm } from '../../hooks/useMentorForm';
import type { Mentor } from '../../types/User';

type Props = {
  onAddUser: (newUser: Mentor) => void;
};

export const MentorForm = ({ onAddUser }: Props) => {
  const { field, onChangeField, handleRegister } = useMentorForm({ onAddUser });

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

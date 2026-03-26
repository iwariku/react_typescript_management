import { StudentForm } from './StudentForm';
import { MentorForm } from './MentorForm';
import type { Mentor, Student } from '../../types/User';
import { useCreateUser } from '../../hooks/useCreateUser';

type Props = {
  onAddUser: (newUser: Student | Mentor) => void;
};

export const CreateUser = ({ onAddUser }: Props) => {
  const { isOpen, activeTab, openForm, closeForm, switchTab } = useCreateUser();

  return (
    <div className="my-3">
      {!isOpen ? (
        //フォームが閉じている時：新規作成ボタンを表示
        <button className="btn btn-success" onClick={openForm}>
          + 新規作成
        </button>
      ) : (
        // フォームが開いている時：登録フォームを表示
        <div className="card p-3 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">新規ユーザー登録</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeForm}
            ></button>
          </div>

          {/* 生徒・メンター切り替えラジオボタン */}
          <div className="btn-group mb-4" role="group">
            <input
              type="radio"
              className="btn-check"
              name="userType"
              id="tab-student"
              checked={activeTab === 'student'}
              onChange={() => switchTab('student')}
            />
            <label className="btn btn-outline-primary" htmlFor="tab-student">
              生徒
            </label>

            <input
              type="radio"
              className="btn-check"
              name="userType"
              id="tab-mentor"
              checked={activeTab === 'mentor'}
              onChange={() => switchTab('mentor')}
            />
            <label className="btn btn-outline-primary" htmlFor="tab-mentor">
              メンター
            </label>
          </div>

          {/* 実際の入力フォームの出し分け */}
          <div className="form-container">
            {activeTab === 'student' ? (
              <StudentForm onAddUser={onAddUser} />
            ) : (
              <MentorForm onAddUser={onAddUser} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

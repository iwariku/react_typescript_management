import { useState } from 'react';
import { StudentForm } from './StudentForm';
import { MentorForm } from './MentorForm';

type TabType = 'student' | 'mentor';

export const CreateUser = ({ onAddUser }) => {
  // フォームが開いているかどうかのフラグ
  const [isOpen, setIsOpen] = useState(false);

  // どのタブを表示しているか
  const [activeTab, setActiveTab] = useState<TabType>('student');

  // もしフォームが閉じていたら「新規登録」ボタンだけを出す
  if (!isOpen) {
    return (
      <div className="my-3">
        <button className="btn btn-success" onClick={() => setIsOpen(true)}>
          + 新規作成
        </button>
      </div>
    );
  }

  return (
    <div className="card my-3 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>新規ユーザー登録</h5>
        <button className="btn-close" onClick={() => setIsOpen(false)}></button>
      </div>

      <div className="btn-group mb-3">
        {/* 生徒・メンター切り替えタブ */}
        <input
          type="radio"
          className="btn-check"
          checked={activeTab === 'student'}
          onChange={() => setActiveTab('student')}
          id="tab-student"
        />
        <label className="btn btn-outline-primary" htmlFor="tab-student">
          生徒
        </label>

        <input
          type="radio"
          className="btn-check"
          checked={activeTab === 'mentor'}
          onChange={() => setActiveTab('mentor')}
          id="tab-mentor"
        />
        <label className="btn btn-outline-primary" htmlFor="tab-mentor">
          メンター
        </label>
      </div>

      {/* ここで実際のフォームを呼び出す */}
      {activeTab === 'student' ? (
        <StudentForm onAddUser={onAddUser} />
      ) : (
        <MentorForm onAddUser={onAddUser} />
      )}
    </div>
  );
};

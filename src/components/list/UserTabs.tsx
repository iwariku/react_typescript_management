import { AllUserList } from './AllUserList';
import { StudentList } from './StudentList';
import { MentorList } from './MentorList';
import { type AllUser } from '../../types/User';
import { useUserTabs } from '../../hooks/useUserTabs';
type Props = {
  allUsers: AllUser[];
};

export const UserTabs = ({ allUsers }: Props) => {
  const { activeTab, setActiveTab, students, mentors, displayAllUsers } =
    useUserTabs({
      allUsers,
    });

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={activeTab === 'all'}
          onChange={() => setActiveTab('all')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          全員
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={activeTab === 'student'}
          onChange={() => setActiveTab('student')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          生徒のみ
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          checked={activeTab === 'mentor'}
          onChange={() => setActiveTab('mentor')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          メンターのみ
        </label>
      </div>

      {activeTab === 'all' && <AllUserList allUsers={displayAllUsers} />}
      {activeTab === 'student' && <StudentList students={students} />}
      {activeTab === 'mentor' && <MentorList mentors={mentors} />}
    </>
  );
};

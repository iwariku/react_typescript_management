import { useState } from 'react';

interface AllUserData {
  id: number;
  name: string;
  role: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;
}

interface StudentData extends AllUserData {
  role: 'student';
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
}

interface MentorData extends AllUserData {
  role: 'mentor';
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
}

class AllUser implements AllUserData {
  id: number;
  name: string;
  role: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;

  constructor(userData: AllUserData) {
    this.id = userData.id;
    this.name = userData.name;
    this.role = userData.role;
    this.email = userData.email;
    this.age = userData.age;
    this.postCode = userData.postCode;
    this.phone = userData.phone;
    this.hobbies = userData.hobbies;
    this.url = userData.url;
  }
}

class Student extends AllUser implements StudentData {
  role: 'student';
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;

  constructor(studentData: StudentData) {
    super(studentData);
    this.role = studentData.role;
    this.studyMinutes = studentData.studyMinutes;
    this.taskCode = studentData.taskCode;
    this.studyLangs = studentData.studyLangs;
    this.score = studentData.score;
  }
}

class Mentor extends AllUser implements MentorData {
  role: 'mentor';
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;

  constructor(mentorData: MentorData) {
    super(mentorData);
    this.role = mentorData.role;
    this.experienceDays = mentorData.experienceDays;
    this.useLangs = mentorData.useLangs;
    this.availableStartCode = mentorData.availableStartCode;
    this.availableEndCode = mentorData.availableEndCode;
  }
}

const USER_LIST: (StudentData | MentorData)[] = [
  {
    id: 1,
    name: '鈴木太郎',
    role: 'student',
    email: 'test1@happiness.com',
    age: 26,
    postCode: '100-0003',
    phone: '0120000001',
    hobbies: ['旅行', '食べ歩き', 'サーフィン'],
    url: 'https://aaa.com',
    studyMinutes: 3000,
    taskCode: 101,
    studyLangs: ['Rails', 'Javascript'],
    score: 68,
  },
  {
    id: 2,
    name: '鈴木二郎',
    role: 'mentor',
    email: 'test2@happiness.com',
    age: 31,
    postCode: '100-0005',
    phone: '0120000002',
    hobbies: ['サッカー', 'ランニング', '筋トレ'],
    url: 'https://bbb.com',
    experienceDays: 1850,
    useLangs: ['Next.js', 'GoLang'],
    availableStartCode: 201,
    availableEndCode: 302,
  },
  {
    id: 3,
    name: '鈴木三郎',
    role: 'student',
    email: 'test3@happiness.com',
    age: 23,
    postCode: '300-0332',
    phone: '0120000003',
    hobbies: ['アニメ', 'ゲーム', '旅行'],
    url: 'https://ccc.com',
    studyMinutes: 125000,
    taskCode: 204,
    studyLangs: ['Rails', 'Next.js'],
    score: 90,
  },
  {
    id: 4,
    name: '鈴木四郎',
    role: 'mentor',
    email: 'test4@happiness.com',
    age: 31,
    postCode: '100-0005',
    phone: '0120000004',
    hobbies: ['食べ歩き', 'ランニング', '旅行'],
    url: 'https://ddd.com',
    experienceDays: 260,
    useLangs: ['PHP', 'Javascript'],
    availableStartCode: 103,
    availableEndCode: 408,
  },
  {
    id: 5,
    name: '鈴木五郎',
    role: 'student',
    email: 'test5@happiness.com',
    age: 22,
    postCode: '300-0005',
    phone: '0120000005',
    hobbies: ['筋トレ', 'ランニング'],
    url: 'https://eee.com',
    studyMinutes: 47800,
    taskCode: 305,
    studyLangs: ['Next.js', 'Rails'],
    score: 84,
  },
  {
    id: 6,
    name: '鈴木六郎',
    role: 'mentor',
    email: 'test6@happiness.com',
    age: 28,
    postCode: '100-0007',
    phone: '0120000006',
    hobbies: ['ゲーム', 'サッカー'],
    url: 'https://fff.com',
    experienceDays: 260,
    useLangs: ['PHP', 'Javascript'],
    availableStartCode: 101,
    availableEndCode: 302,
  },
  {
    id: 7,
    name: '鈴木七郎',
    role: 'student',
    email: 'test7@happiness.com',
    age: 24,
    postCode: '300-0008',
    phone: '0120000007',
    hobbies: ['筋トレ', 'ダーツ'],
    url: 'https://ggg.com',
    studyMinutes: 26900,
    taskCode: 401,
    studyLangs: ['PHP', 'Rails'],
    score: 73,
  },
  {
    id: 8,
    name: '鈴木八郎',
    role: 'mentor',
    email: 'test8@happiness.com',
    age: 33,
    postCode: '100-0009',
    phone: '0120000008',
    hobbies: ['ランニング', '旅行'],
    url: 'https://hhh.com',
    experienceDays: 6000,
    useLangs: ['Golang', 'Rails'],
    availableStartCode: 301,
    availableEndCode: 505,
  },
];

const allInstances = USER_LIST.map((user: StudentData | MentorData) => {
  if (user.role === 'student') {
    return new Student(user);
  } else {
    return new Mentor(user);
  }
});

export const UserList = () => {
  type TabType = 'all' | 'student' | 'mentor';
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const displayUsers = allInstances.filter((user) => {
    if (activeTab === 'all') return true;
    return user.role === activeTab;
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
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.postCode}</td>
              <td>{user.phone}</td>
              <td>{user.hobbies}</td>
              <td>{user.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

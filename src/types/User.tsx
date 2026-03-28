export interface AllUserData {
  id: number;
  name: string;
  role: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string | string[];
  url: string;
}

export interface StudentData extends AllUserData {
  role: 'student';
  studyMinutes: number;
  taskCode: number;
  studyLangs: string | string[];
  score: number;
  matchedMentor?: string[];
}

export interface MentorData extends AllUserData {
  role: 'mentor';
  experienceDays: number;
  useLangs: string | string[];
  availableStartCode: number;
  availableEndCode: number;
  matchedStudent?: string[];
}

export class AllUser implements AllUserData {
  id: number;
  name: string;
  role: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string | string[];
  url: string;

  constructor(data: AllUserData) {
    this.id = data.id;
    this.name = data.name;
    this.role = data.role;
    this.email = data.email;
    this.age = data.age;
    this.postCode = data.postCode;
    this.phone = data.phone;
    this.hobbies = data.hobbies;
    this.url = data.url;
  }
}

export class Student extends AllUser implements StudentData {
  role: 'student';
  studyMinutes: number;
  taskCode: number;
  studyLangs: string | string[];
  score: number;
  matchedMentor?: string[];

  constructor(data: StudentData) {
    super({ ...data, role: 'student' });
    this.role = 'student';
    this.studyMinutes = data.studyMinutes;
    this.taskCode = data.taskCode;
    this.studyLangs = data.studyLangs;
    this.score = data.score;
    this.matchedMentor = data.matchedMentor;
  }

  getMatchedMentorNames(allMentors: Mentor[]): string {
    return (
      allMentors
        .filter(
          (m) =>
            this.taskCode >= m.availableStartCode &&
            this.taskCode <= m.availableEndCode,
        )
        .map((m) => m.name)
        .join(', ') || '担当メンター無し'
    );
  }
}

export class Mentor extends AllUser implements MentorData {
  role: 'mentor';
  experienceDays: number;
  useLangs: string | string[];
  availableStartCode: number;
  availableEndCode: number;
  matchedStudent?: string[];

  constructor(data: MentorData) {
    super({ ...data, role: 'mentor' });
    this.role = 'mentor';
    this.experienceDays = data.experienceDays;
    this.useLangs = data.useLangs;
    this.availableStartCode = data.availableStartCode;
    this.availableEndCode = data.availableEndCode;
    this.matchedStudent = data.matchedStudent;
  }

  getMatchedStudentNames(allStudent: Student[]): string {
    return (
      allStudent
        .filter(
          (s) =>
            s.taskCode >= this.availableStartCode &&
            s.taskCode <= this.availableEndCode,
        )
        .map((s) => s.name)
        .join(', ') || '担当生徒なし'
    );
  }
}

export interface AllUserData {
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

export interface StudentData extends AllUserData {
  role: 'student';
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
}

export interface MentorData extends AllUserData {
  role: 'mentor';
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
}

export class AllUser implements AllUserData {
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

export class Student extends AllUser implements StudentData {
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

export class Mentor extends AllUser implements MentorData {
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

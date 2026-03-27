import { useState } from 'react';
import { Student, type StudentData } from '../types/User';

type Props = {
  onAddUser: (newUser: Student) => void;
};

export const useStudentForm = ({ onAddUser }: Props) => {
  const initialStudentValues: StudentData = {
    id: 0,
    name: '',
    role: 'student' as const,
    email: '',
    age: 0,
    postCode: '',
    phone: '',
    hobbies: [],
    url: '',
    studyMinutes: 0,
    taskCode: 0,
    studyLangs: [],
    score: 0,
  };

  const [field, setField] = useState<StudentData>(initialStudentValues);

  const onChangeField = <K extends keyof StudentData>(
    key: K,
    value: StudentData[K],
  ) => {
    setField((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const hobbiesStr = Array.isArray(field.hobbies)
      ? field.hobbies.join(',') // 万が一配列だった場合は文字列に戻す（安全策）
      : field.hobbies; // 文字列ならそのまま使う

    const studyLangsStr = Array.isArray(field.studyLangs)
      ? field.studyLangs.join(',')
      : field.studyLangs;

    const hobbyArray = hobbiesStr.split(',').map((s) => s.trim());
    const studyLangArray = studyLangsStr.split(',').map((s) => s.trim());

    const studentParams: StudentData = {
      ...field,
      id: Date.now(),
      hobbies: hobbyArray,
      studyLangs: studyLangArray,
    };

    const newStudent = new Student(studentParams);
    onAddUser(newStudent);

    alert('追加できました');
    console.log(newStudent);
  };

  return {
    field,
    onChangeField,
    handleRegister,
  };
};

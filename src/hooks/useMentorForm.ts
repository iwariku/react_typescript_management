import { useState } from 'react';
import { Mentor, type MentorData } from '../types/User';

type Props = {
  onAddUser: (newUser: Mentor) => void;
};

export const useMentorForm = ({ onAddUser }: Props) => {
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

  return {
    field,
    onChangeField,
    handleRegister,
  };
};

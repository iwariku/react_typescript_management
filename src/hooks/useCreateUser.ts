// src/hooks/useCreateUser.ts
import { useState } from 'react';

type UserRole = 'student' | 'mentor';

export const useCreateUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<UserRole>('student');

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  const switchTab = (tab: UserRole) => setActiveTab(tab);

  return {
    isOpen,
    activeTab,
    openForm,
    closeForm,
    switchTab,
  };
};

// src/hooks/useCreateUser.ts
import { useState } from 'react';

type TabType = 'student' | 'mentor';

export const useCreateUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('student');

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  const switchTab = (tab: TabType) => setActiveTab(tab);

  return {
    isOpen,
    activeTab,
    openForm,
    closeForm,
    switchTab,
  };
};

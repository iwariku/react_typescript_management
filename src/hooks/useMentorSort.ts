import { useState } from 'react';
import type { Mentor } from '../types/User';

type Props = {
  mentors: Mentor[];
};

type SortOrder = 'asc' | 'desc' | undefined;

export const useMentorSort = ({ mentors }: Props) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  const sortedMentors = [...mentors].sort((a, b) => {
    if (sortOrder === undefined) return a.id - b.id;

    // 実務経験を月表記で
    const monthA = a.experienceDays / 30;
    const monthB = b.experienceDays / 30;

    // 昇順なら (A - B) / 降順なら(B - A)
    return sortOrder === 'asc' ? monthA - monthB : monthB - monthA;
  });

  const handleSort = () => {
    if (sortOrder === undefined) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(undefined);
    }
  };

  return {
    sortOrder,
    sortedMentors,
    handleSort,
  };
};

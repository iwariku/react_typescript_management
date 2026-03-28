import { useState } from 'react';
import type { Student } from '../types/User';

type Props = {
  students: Student[];
};

type SortKey = 'studyMinutes' | 'score' | undefined;
type SortOrder = 'asc' | 'desc' | undefined;

export const useStudentSort = ({ students }: Props) => {
  const [sortKey, setSortKey] = useState<SortKey>(undefined);
  const [sortOrder, setSortOrder] = useState<SortOrder>(undefined);

  // ソートロジック
  const sortedStudents = [...students].sort((a, b) => {
    if (!sortKey || !sortOrder) return a.id - b.id;

    // sortKeyによってどちらの項目を選択しているかを判断する
    const valA = sortKey === 'studyMinutes' ? a.studyMinutes : a.score;
    const valB = sortKey === 'studyMinutes' ? b.studyMinutes : b.score;

    return sortOrder === 'asc' ? valA - valB : valB - valA;
  });

  // ソートボタンのクリックイベント
  const handleSort = (key: SortKey) => {
    // 別の項目がクリックされたら(時間 -> スコア)選択された項目を「昇順」にする
    if (sortKey !== key) {
      setSortKey(key);
      setSortOrder('asc');
      return;
    }

    // 同じ項目がクリックされたら、今の状態を見て昇順 -> 降順 -> ソートなしになるようにする
    if (sortOrder === undefined) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(undefined);
      setSortKey(undefined);
    }
  };

  return {
    sortKey,
    sortOrder,
    sortedStudents,
    handleSort,
  };
};

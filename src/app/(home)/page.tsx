'use client';

import PostList from '@/components/Post/PostList';
import { MOCK_DATA } from '@/mock/mock';
import React, { useEffect } from 'react';

const HomePage = () => {
  // 초기 posts 데이터를 추가해 주기 위한 로직
  useEffect(() => {
    if (localStorage.getItem('posts')?.length === 0) {
      localStorage.setItem('posts', JSON.stringify(MOCK_DATA));
    }
  }, []);

  return (
    <>
      <PostList />
    </>
  );
};

export default HomePage;

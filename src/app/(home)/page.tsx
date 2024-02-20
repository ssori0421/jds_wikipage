'use client';

import PostList from '@/components/Post/PostList';
import { MOCK_DATA } from '@/mock/mock';
import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(MOCK_DATA));
  }, []);
  return (
    <>
      <PostList />
    </>
  );
};

export default HomePage;

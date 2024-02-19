'use client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { INIT_POSTS } from '../postSlice';

const InitPostProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(INIT_POSTS());
  }, [dispatch]);

  return <>{children}</>;
};

export default InitPostProvider;

'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import InitPostProvider from './initPostsProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <InitPostProvider>{children}</InitPostProvider>
    </Provider>
  );
};

export default Providers;

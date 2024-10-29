// AppLayout.js
import React from 'react';
import Header from '../components/app/Header';

const AppLayout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 overflow-y-auto'>{children}</main>
    </div>
  );
};

export default AppLayout;

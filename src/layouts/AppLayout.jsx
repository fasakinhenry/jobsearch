import React from 'react';
import Header from '../components/app/Header';

const AppLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto px-4'>{children}</main>
    </div>
  );
};

export default AppLayout;

import React from 'react';
import Header from '../components/app/Header';

const AppLayout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;

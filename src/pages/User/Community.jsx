import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout';
import Sidebar from '../../components/community/Sidebar';
import CommunityHome from '../../components/community/CommunityHome';
import Posts from '../../components/community/Posts';

const Community = () => {
  return (
    <AppLayout>
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 overflow-y-auto bg-gray-50'>
          <Routes>
            <Route path='/home' element={<CommunityHome />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </div>
      </div>
    </AppLayout>
  );
};

export default Community;

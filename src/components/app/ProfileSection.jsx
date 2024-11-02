import React from 'react';
import { useAuth } from '../../context/AuthContext';

const ProfileSection = () => {
  const {user} = useAuth()
  return (
    <div className='p-4 md:p-6 border-b border-gray-200'>
      <div className='flex flex-col items-center'>
        <div className='w-16 md:w-20 h-16 md:h-20 rounded-full bg-gray-200 mb-4'></div>
        <h2 className='text-2xl font-semibold'>{user.name}</h2>
        <p className='text-gray-600 text-sm'>UI Designer</p>
        <p className='text-gray-500 text-sm'>2 years experience</p>
        <button className='mt-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors'>
          Applied Job
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;

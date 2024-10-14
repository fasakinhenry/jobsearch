import React from 'react';
import { Bell, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className='bg-white border-b border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <h1 className='text-2xl font-bold'>JobTrack</h1>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <a href='#' className='text-blue-500'>
                  Find Work
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600'>
                  Applications
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600'>
                  Community
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center space-x-4'>
          <Bell className='text-gray-600' />
          <MessageCircle className='text-gray-600' />
          <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

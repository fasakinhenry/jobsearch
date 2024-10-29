import React from 'react';
import { Bell, MessageCircle, Menu } from 'lucide-react';
import { Icon } from '@iconify/react';

const Header = ({ onMenuClick }) => {
  return (
    <header className='bg-white border-b border-gray-200 p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <button className='md:hidden' onClick={onMenuClick}>
            <Menu size={24} />
          </button>
          <div className='flex items-center'>
            <Icon
              icon='mingcute:group-line'
              className='w-8 h-8 text-green-600'
            />
            <a
              to='/'
              className='text-xl md:text-2xl font-bold ml-2 text-green-600'
            >
              Joblier
            </a>
          </div>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <a href='#' className='text-green-600 flex items-center'>
                <Icon icon='mingcute:home-4-fill' className='mr-2' />
                Home
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 flex items-center'>
                <Icon icon='mingcute:search-3-line' className='mr-2' />
                Find Jobs
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 flex items-center'>
                <Icon icon='mingcute:building-1-fill' className='mr-2' />
                Companies
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 flex items-center'>
                <Icon icon='mingcute:comment-2-line' className='mr-2' />
                Community
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          {/* <Bell className='text-gray-600' />
          <MessageCircle className='text-gray-600' /> */}
          <Icon icon='mingcute:notification-newdot-line' className='text-gray-600' />
          <Icon icon='mingcute:message-3-line' className='text-gray-600' />
          <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
            <Icon icon='mingcute:user-2-line' className='text-gray-600' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

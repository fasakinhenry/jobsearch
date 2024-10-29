import React from 'react';
import { Icon } from '@iconify/react';

const TopSkills = () => {
  const skills = [
    'User Interface',
    'Product Designer',
    'Wireframe',
    'UX Research',
  ];

  return (
    <div className='p-4 md:p-6'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-semibold'>Top Skill</h3>
        <button className='text-gray-400 hover:text-gray-600 transition-colors'>
          <Icon icon='mingcute:edit-line' />
        </button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm hover:bg-green-100 transition-colors'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopSkills;

import React from 'react';
import { MoreVertical } from 'lucide-react';

const SuggestedJobCard = ({ logo, company, title, days, applied }) => (
  <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
    <div className='flex items-start justify-between mb-2'>
      <div className='flex items-center'>
        <img src={logo} alt={company} className='w-10 h-10 mr-3' />
        <div>
          <h4 className='font-semibold'>{company}</h4>
          <p className='text-sm text-gray-600'>{title}</p>
        </div>
      </div>
      <button className='text-gray-400'>
        <MoreVertical size={16} />
      </button>
    </div>
    <div className='flex justify-between text-sm text-gray-500'>
      <span>{days} days ago</span>
      <span>{applied} Applied</span>
    </div>
  </div>
);

const SuggestedJobs = () => {
  const suggestedJobs = [
    {
      logo: '/api/placeholder/32/32',
      company: 'GitLab',
      title: 'Junior UI/UX Designer',
      days: 1,
      applied: 26,
    },
    {
      logo: '/api/placeholder/32/32',
      company: 'SpreadSimple',
      title: 'Senior UI/UX Designer',
      days: 2,
      applied: 26,
    },
    {
      logo: '/api/placeholder/32/32',
      company: 'Sketch',
      title: 'Junior UI/UX Designer',
      days: 1,
      applied: 26,
    },
  ];

  return (
    <aside className='w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>Suggested Job</h2>
        <button className='text-gray-400'>
          <MoreVertical size={20} />
        </button>
      </div>
      {suggestedJobs.map((job, index) => (
        <SuggestedJobCard key={index} {...job} />
      ))}
    </aside>
  );
};

export default SuggestedJobs;

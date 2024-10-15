import React from 'react';
import { MoreVertical } from 'lucide-react';

const SuggestedJobCard = ({ logo, company, title, days, applied }) => (
  <div className='bg-white rounded-lg shadow-md p-3 md:p-4 mb-4'>
    <div className='flex items-start justify-between mb-2'>
      <div className='flex items-center'>
        <img
          src={logo}
          alt={company}
          className='w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3'
        />
        <div>
          <h4 className='font-semibold text-sm md:text-base'>{company}</h4>
          <p className='text-xs md:text-sm text-gray-600'>{title}</p>
        </div>
      </div>
      <button className='text-gray-400'>
        <MoreVertical size={16} />
      </button>
    </div>
    <div className='flex justify-between text-xs md:text-sm text-gray-500'>
      <span>{days} days ago</span>
      <span>{applied} Applied</span>
    </div>
  </div>
);

const SuggestedJobs = () => {
const suggestedJobs = [
    {
        logo: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png',
        company: 'GitLab',
        title: 'Junior UI/UX Designer',
        days: 1,
        applied: 26,
    },
    {
        logo: 'https://spreadsimple.com/favicon-32x32.png',
        company: 'SpreadSimple',
        title: 'Senior UI/UX Designer',
        days: 2,
        applied: 26,
    },
    {
        logo: 'https://sketch.com/images/pages/press/sketch-logo.svg',
        company: 'Sketch',
        title: 'Junior UI/UX Designer',
        days: 1,
        applied: 26,
    },
];

  return (
    <aside className='hidden lg:block w-64 xl:w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto'>
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

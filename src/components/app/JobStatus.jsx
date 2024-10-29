import React from 'react';
import { Icon } from '@iconify/react';

const JobStatus = () => {
  const jobs = [
    {
      icon: 'mingcute:code-line',
      company: 'Dewa - Dewi',
      location: 'Sragen, Central Java',
      status: 'Active',
      bgColor: 'purple',
    },
    {
      icon: 'mingcute:paint-line',
      company: 'Papa Studio',
      location: 'Palangkaraya, Borneo',
      status: 'Active',
      bgColor: 'red',
    },
    {
      icon: 'mingcute:computer-line',
      company: 'Burberian Tech',
      location: 'Solo, Central Java',
      status: 'Closed',
      bgColor: 'blue',
    },
  ];

  return (
    <div className='p-4 md:p-6 border-b border-gray-200'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-semibold'>Job Status</h3>
        <button className='text-gray-400 hover:text-gray-600 transition-colors'>
          <Icon icon='mingcute:edit-line' />
        </button>
      </div>
      <div className='space-y-4'>
        {jobs.map((job, index) => (
          <div key={index} className='flex items-center space-x-3'>
            <div
              className={`w-10 h-10 bg-${job.bgColor}-100 rounded-full flex items-center justify-center`}
            >
              <Icon icon={job.icon} className={`text-${job.bgColor}-600`} />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='font-medium truncate'>{job.company}</p>
              <p className='text-sm text-gray-500 truncate'>{job.location}</p>
            </div>
            <span
              className={`text-${
                job.status === 'Active' ? 'green' : 'red'
              }-500 text-sm bg-${
                job.status === 'Active' ? 'green' : 'red'
              }-50 px-2 py-1 rounded whitespace-nowrap`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobStatus;

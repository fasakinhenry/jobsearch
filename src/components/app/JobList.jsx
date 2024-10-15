import React from 'react';
import { MoreVertical, Clock, MapPin } from 'lucide-react';

const JobCard = ({
  title,
  company,
  location,
  salary,
  applicants,
  date,
  description,
}) => (
  <div className='bg-white rounded-lg shadow-md p-4 md:p-6 mb-4'>
    <div className='flex justify-between items-start mb-4'>
      <div>
        <h3 className='text-lg md:text-xl font-semibold'>{title}</h3>
        <p className='text-gray-600'>{company}</p>
      </div>
      <button className='text-gray-400'>
        <MoreVertical size={20} />
      </button>
    </div>
    <div className='flex flex-wrap items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500 mb-4'>
      <span className='flex items-center'>
        <Clock size={16} className='mr-1' /> Full Time
      </span>
      <span className='flex items-center'>
        <Clock size={16} className='mr-1' /> 1-2 Year
      </span>
      <span className='flex items-center'>
        <MapPin size={16} className='mr-1' /> {location}
      </span>
    </div>
    <p className='text-gray-700 mb-4 text-sm md:text-base'>{description}</p>
    <div className='flex flex-wrap justify-between items-center'>
      <span className='text-green-500 font-semibold text-sm md:text-base'>
        {salary}/Month
      </span>
      <span className='text-gray-500 text-sm'>{applicants} Applied</span>
      <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm md:text-base mt-2 md:mt-0'>
        Apply Now
      </button>
    </div>
  </div>
);

const JobList = () => {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'Semrush',
      location: 'NY, USA',
      salary: '$30k-40k',
      applicants: '49',
      date: '28 Mar 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur. Dicumst viverra facilisis dis sociis sed. Id venenatis faucibus condimentum elementum. Velit etiam et amet quam et faucis.',
    },
    {
      title: 'Senior Backend Developer',
      company: 'Yandex, Jesso',
      location: 'UK, London',
      salary: '$35k-45k',
      applicants: '39',
      date: '28 Mar 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur. Dicumst viverra facilisis dis sociis sed. Id venenatis faucibus condimentum elementum. Velit etiam et amet quam et faucis.',
    },
  ];

  return (
    <div>
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobList;

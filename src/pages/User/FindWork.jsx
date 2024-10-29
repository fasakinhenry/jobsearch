// pages/FindWork.jsx
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { JobFilters, JobCard } from '../../components/FindJob';
import AppLayout from '../../layouts/AppLayout';

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    jobType: {
      fullTime: false,
      partTime: false,
      internship: false,
      projectWork: false,
      volunteering: false,
    },
    experienceLevel: {
      entry: false,
      intermediate: false,
      expert: false,
    },
    salaryRange: 50000,
  });

  // Mock data - replace with API call in the future
  const mockJobs = [
    {
      id: 1,
      title: 'Product designer',
      company: 'MetaMask',
      companyLogo: '/company-logos/metamask.png',
      description:
        'Doing the right thing for investors is what we are all about at Vanguard, and that includes...',
      salary: 250,
      postedTime: '12 days ago',
      tags: [
        { label: 'Entry Level', type: 'primary' },
        { label: 'Full-Time', type: 'secondary' },
        { label: 'Remote', type: 'default' },
      ],
    },
    {
      id: 1,
      title: 'Product designer',
      company: 'MetaMask',
      companyLogo: '/company-logos/metamask.png',
      description:
        'Doing the right thing for investors is what we are all about at Vanguard, and that includes...',
      salary: 250,
      postedTime: '12 days ago',
      tags: [
        { label: 'Entry Level', type: 'primary' },
        { label: 'Full-Time', type: 'secondary' },
        { label: 'Remote', type: 'default' },
      ],
    },
    // Add more mock jobs here
  ];

  useEffect(() => {
    // Simulating API call
    setLoading(true);
    setTimeout(() => {
      setJobs(mockJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery, location);
  };

  return (
    <AppLayout>
      <div className='min-h-screen w-full bg-gray-100'>
        <div className='w-full'>
          <div className='mb-8 bg-gradient-to-r from-green-600 to-green-500 py-8 px-4 text-white'>
            <h1 className='text-3xl font-bold mb-6'>
              Find Your Dream Job Here
            </h1>
            <form
              onSubmit={handleSearch}
              className='flex flex-col md:flex-row gap-4'
            >
              <div className='flex-1 relative text-white'>
                <Icon
                  icon='mingcute:search-3-line'
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white'
                />
                <input
                  type='text'
                  placeholder='Job title or keyword'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white'
                />
              </div>
              <div className='flex-1 relative'>
                <Icon
                  icon='mingcute:map-pin-line'
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white'
                />
                <input
                  type='text'
                  placeholder='Add country or city'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white'
                />
              </div>
              <button
                type='submit'
                className='bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors'
              >
                Search
              </button>
            </form>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 px-4'>
            <aside className='lg:col-span-1'>
              <div className='sticky top-24'>
                <JobFilters filters={filters} setFilters={setFilters} />
              </div>
            </aside>

            <main className='lg:col-span-3'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold'>Recommended jobs</h2>
                <select className='border border-gray-200 rounded-full px-4 py-2 pr-5'>
                  <option>Most recent</option>
                  <option>Most relevant</option>
                  <option>Highest paid</option>
                </select>
              </div>

              {loading ? (
                <div className='flex justify-center items-center h-64'>
                  <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                </div>
              ) : (
                <div className='space-y-4'>
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FindWork;

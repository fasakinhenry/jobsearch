import { useState } from 'react';
import { Header, Sidebar, JobList, SuggestedJobs } from '../../components/app';
import { Icon } from '@iconify/react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex flex-1 overflow-hidden'>
        <div className='w-80 border-r border-gray-200 overflow-y-auto'>
          {/* Profile Section */}
          <div className='p-6 border-b border-gray-200'>
            <div className='flex flex-col items-center'>
              <div className='w-20 h-20 rounded-full bg-gray-200 mb-4'></div>
              <h2 className='text-lg font-semibold'>Pertiwi Swann</h2>
              <p className='text-gray-600 text-sm'>UI Designer</p>
              <p className='text-gray-500 text-sm'>2 years experience</p>
              <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm'>
                Applied Job
              </button>
            </div>
          </div>

          {/* Job Status Section */}
          <div className='p-6 border-b border-gray-200'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='font-semibold'>Job Status</h3>
              <button className='text-gray-400'>
                <Icon icon='mingcute:edit-line' />
              </button>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center'>
                  <Icon icon='mingcute:code-line' className='text-purple-600' />
                </div>
                <div className='flex-1'>
                  <p className='font-medium'>Dewa - Dewi</p>
                  <p className='text-sm text-gray-500'>Sragen, Central Java</p>
                </div>
                <span className='text-green-500 text-sm bg-green-50 px-2 py-1 rounded'>
                  Active
                </span>
              </div>
              {/* Add more job status items similarly */}
            </div>
          </div>

          {/* Top Skills Section */}
          <div className='p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='font-semibold'>Top Skill</h3>
              <button className='text-gray-400'>
                <Icon icon='mingcute:edit-line' />
              </button>
            </div>
            <div className='flex flex-wrap gap-2'>
              <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm'>
                User Interface
              </span>
              <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm'>
                Product Designer
              </span>
              <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm'>
                Wireframe
              </span>
              <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm'>
                UX Research
              </span>
            </div>
          </div>
        </div>

        <main className='flex-1 overflow-y-auto p-4 md:p-6'>
          <div className='relative z-10'>
            <div className='bg-blue-600 text-white rounded-lg p-4 md:p-6 mb-6'>
              <h1 className='text-xl md:text-2xl font-bold mb-2'>
                Find your dream job here!
              </h1>
              <p className='mb-4 text-sm md:text-base'>
                Looking for jobs? Browse our lastest job openings to view &
                apply to the best jobs today!
              </p>
              <div className='flex flex-col sm:flex-row'>
                <input
                  type='text'
                  placeholder='Search Job...'
                  className='flex-grow rounded-lg sm:rounded-r-none px-4 py-2 text-black mb-2 sm:mb-0'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='bg-blue-700 hover:bg-blue-800 rounded-lg sm:rounded-l-none px-6 py-2'>
                  Search
                </button>
              </div>
            </div>
            <JobList />
          </div>
        </main>
        <SuggestedJobs />
      </div>
    </div>
  );
};

export default Home;

import { useState } from 'react';
import { Header, Sidebar, JobList, SuggestedJobs } from '../../components/app';
import gridBackground from '../../assets/images/gridbackground.svg'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className='flex-1 overflow-y-auto p-4 md:p-6'>
          {/* <GridBackground className='absolute inset-0 z-0' /> */}
          <div className='relative z-10'>
            <div className='bg-green-500 text-white rounded-lg p-4 md:p-6 mb-6'>
              <h1 className='text-xl md:text-2xl font-bold mb-2'>
                Find your dream job here!
              </h1>
              <p className='mb-4 text-sm md:text-base'>
                Explore the latest job openings and apply for the best job
                opportunities available today!
              </p>
              <div className='flex flex-col sm:flex-row'>
                <input
                  type='text'
                  placeholder='Search Job'
                  className='flex-grow placeholder:text-gray-100 rounded-lg sm:rounded-r-none px-4 py-2 text-black mb-2 sm:mb-0'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='bg-green-600 hover:bg-green-700 rounded-lg sm:rounded-l-none px-6 py-2'>
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

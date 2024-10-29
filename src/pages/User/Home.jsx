import { useState } from 'react';
import { Header, JobList, SuggestedJobs } from '../../components/app';
import ProfileSection from '../../components/ProfileSection';
import JobStatus from '../../components/JobStatus';
import TopSkills from '../../components/TopSkills';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex flex-1 overflow-hidden'>
        {/* Left Sidebar */}
        <div className='hidden md:block w-80 border-r border-gray-200 overflow-y-auto'>
          <ProfileSection />
          <JobStatus />
          <TopSkills />
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className='fixed inset-0 z-50 md:hidden'>
            <div
              className='absolute inset-0 bg-black bg-opacity-50'
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className='absolute left-0 top-0 h-full w-80 bg-white overflow-y-auto'>
              <ProfileSection />
              <JobStatus />
              <TopSkills />
            </div>
          </div>
        )}

        <main className='flex-1 overflow-y-auto p-4 md:p-6'>
          <div className='relative z-10'>
            <div className='bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg p-4 md:p-6 mb-6'>
              <h1 className='text-xl md:text-2xl font-bold mb-2'>
                Find your dream job with AI ✨
              </h1>
              <p className='mb-4 text-sm md:text-base'>
                Let our AI-powered job matching system find the perfect
                opportunities tailored just for you!
              </p>
              <div className='flex flex-col sm:flex-row gap-2'>
                <div className='flex-grow'>
                  <input
                    type='text'
                    placeholder='Search Job...'
                    className='w-full rounded-lg bg-white/90 backdrop-blur-sm px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className='bg-green-700 hover:bg-green-800 rounded-lg px-6 py-2 transition-colors whitespace-nowrap'>
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

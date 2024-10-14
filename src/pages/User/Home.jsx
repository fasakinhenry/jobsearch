import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import JobList from './JobList';
import SuggestedJobs from './SuggestedJobs';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-blue-500 text-white rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">Find your dream job here!</h1>
            <p className="mb-4">Explore the latest job openings and apply for the best job opportunities available today!</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search Job"
                className="flex-grow rounded-l-lg px-4 py-2 text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 rounded-r-lg px-6 py-2">
                Search
              </button>
            </div>
          </div>
          <JobList />
        </main>
        <SuggestedJobs />
      </div>
    </div>
  );
};

export default Home;

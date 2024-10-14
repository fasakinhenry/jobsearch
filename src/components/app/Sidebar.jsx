import React from 'react';
import { Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <button className="text-blue-500 mb-4">Clear all</button>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Salary</h3>
        <input type="range" min="300" max="5000" className="w-full" />
        <div className="flex justify-between">
          <span>$300</span>
          <span>$5k</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Job Type</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Urgent
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remote
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked />
            Full-Time
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Experience Level</h3>
        <div className="space-y-2">
          <label className="flex items-center justify-between">
            <span>Entry Level</span>
            <span className="text-gray-500">387 jobs</span>
          </label>
          <label className="flex items-center justify-between">
            <span>Intermediate</span>
            <span className="text-gray-500">169 jobs</span>
          </label>
          <label className="flex items-center justify-between">
            <span>Expert</span>
            <span className="text-gray-500">2986 jobs</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Job Location</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            On Site
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by Location" className="w-full pl-10 pr-4 py-2 border rounded" />
          </div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" checked />
            Remote
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Applicants</h3>
        <div className="space-y-2">
          <label className="flex items-center justify-between">
            <span>Less than 10</span>
            <span className="text-gray-500">268 jobs</span>
          </label>
          <label className="flex items-center justify-between">
            <span>10 to 50</span>
            <span className="text-gray-500">169 jobs</span>
          </label>
          <label className="flex items-center justify-between">
            <span>50 to 100</span>
            <span className="text-gray-500">25 jobs</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

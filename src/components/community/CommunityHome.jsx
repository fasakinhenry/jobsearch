import React from 'react';
import { Icon } from '@iconify/react';

const CommunityHome = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid gap-6">
        {/* Project Creation Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Create A New Project</h2>
          <p className="text-gray-600 mb-4">
            Manage any type of project, assign owners, set timeline, keep track
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              New Project
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Import Project
            </button>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Your overall statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon icon="mingcute:star-line" />
                  Total stars Earned
                </span>
                <span>450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon icon="mingcute:git-commit-line" />
                  Total Commits
                </span>
                <span>4.6k</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon icon="mingcute:git-merge-line" />
                  Total Merge requests
                </span>
                <span>576</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Icon icon="mingcute:error-warning-line" />
                  Total Issues
                </span>
                <span>576</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Placeholder for circular progress - you can add a proper circular progress component here */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Want all analytics?</h2>
          <p className="text-gray-600 mb-4">
            See all your graphs and analytics over the past working days
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            See graphs
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityHome;

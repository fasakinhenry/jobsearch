import React from 'react';
import { Icon } from '@iconify/react';

const Posts = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Create Post Section */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex gap-4 items-center mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <input
            type="text"
            placeholder="Hello world! Describe your new project or milestone"
            className="flex-1 p-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Icon icon="mingcute:video-line" />
              Video
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Icon icon="mingcute:image-line" />
              Image
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Icon icon="mingcute:folder-line" />
              Projects
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Icon icon="mingcute:package-line" />
              Product
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Icon icon="mingcute:code-line" />
              Snippets
            </button>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Post
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">New</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Top</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Hot</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Closed</button>
      </div>
    </div>
  );
};

export default Posts;

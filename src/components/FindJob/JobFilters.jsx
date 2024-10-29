import React from 'react';

const JobFilters = ({ filters, setFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [value]: !prev[category][value],
      },
    }));
  };

  return (
    <div className='space-y-6 p-4 bg-white rounded-lg shadow-sm'>
      <div>
        <h3 className='font-semibold mb-3'>Job Type</h3>
        <div className='space-y-2'>
          {Object.entries(filters.jobType).map(([key, checked]) => (
            <label key={key} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={checked}
                onChange={() => handleCheckboxChange('jobType', key)}
                className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
              />
              <span className='text-sm text-gray-600 capitalize'>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className='font-semibold mb-3'>Experience Level</h3>
        <div className='space-y-2'>
          {Object.entries(filters.experienceLevel).map(([key, checked]) => (
            <label key={key} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={checked}
                onChange={() => handleCheckboxChange('experienceLevel', key)}
                className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
              />
              <span className='text-sm text-gray-600 capitalize'>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className='font-semibold mb-3'>Salary Range</h3>
        <input
          type='range'
          min='50000'
          max='120000'
          step='1000'
          value={filters.salaryRange}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, salaryRange: e.target.value }))
          }
          className='w-full'
        />
        <div className='flex justify-between text-sm text-gray-600'>
          <span>$50k</span>
          <span>$120k</span>
        </div>
      </div>
    </div>
  );
};

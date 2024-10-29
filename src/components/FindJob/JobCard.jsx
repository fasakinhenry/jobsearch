import { Icon } from '@iconify/react';

const JobCard = ({ job }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
      <div className='flex justify-between items-start'>
        <div className='flex items-start space-x-4'>
          <img
            src={job.companyLogo}
            alt={job.company}
            className='w-12 h-12 rounded'
          />
          <div>
            <h3 className='font-semibold text-lg'>{job.title}</h3>
            <p className='text-gray-600'>{job.company}</p>
          </div>
        </div>
        <button className='text-gray-400 hover:text-gray-600'>
          <Icon icon='mingcute:heart-line' className='w-6 h-6' />
        </button>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              tag.type === 'primary'
                ? 'bg-purple-100 text-purple-700'
                : tag.type === 'secondary'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <p className='mt-4 text-gray-600 line-clamp-2'>{job.description}</p>

      <div className='mt-4 flex items-center justify-between'>
        <span className='text-lg font-semibold text-gray-900'>
          ${job.salary}/hr
        </span>
        <span className='text-sm text-gray-500 flex items-center'>
          <Icon icon='mingcute:time-line' className='w-4 h-4 mr-1' />
          Posted {job.postedTime}
        </span>
      </div>
    </div>
  );
};

export default JobCard;

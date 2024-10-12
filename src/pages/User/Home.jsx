import { Button } from '../../components';
import UserPage from './UserPage';
import { PlusIcon, ShareIcon } from '@heroicons/react/24/outline';
import avatar from '../../assets/images/avatars/avatar6.png';
import { Briefcase, Money4, Star1 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jobs } from './jobs';

const Home = () => {
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobsList, setFilteredJobsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const descriptionExceedLetters = (description) => {
    return description.length >= 65
      ? `${description.substr(0, 65)}...`
      : description;
  };

  const showJobImage = (image) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = image;
      img.onload = () => resolve(image); // Valid image
      img.onerror = () => resolve(avatar); // Fallback to avatar on error
    });
  };

  const fetchImages = async () => {
    const updatedJobs = await Promise.all(
      jobs.map(async (job) => ({
        ...job,
        image: await showJobImage(job.image),
      }))
    );
    setJobsList(updatedJobs);
    setFilteredJobsList(updatedJobs);
  };

  const handleJobSearch = () => {};

  useEffect(() => {
    setJobsList(jobs);
    setFilteredJobsList(jobs);
    fetchImages();
  }, []);

  useEffect(() => {
    handleJobSearch();
  }, [searchTerm]);
  return (
    <UserPage>
      <div className='grid'>
        <div className='sticky top-0 bg-opacity-90 bg-white py-5 flex items-center justify-between'>
          <h2 className='text-3xl'>What Job would you like to see today ?</h2>
          <Link to='/my-jobs/create'>
            <Button>
              <PlusIcon className='h-6 w-6' />
              <p>Create Job</p>
            </Button>
          </Link>
        </div>
        <div className='grid mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5 px-1 py-1'>
            {jobsList.map((job) => (
              <Link
                to={`/jobs/${job.id}`}
                key={job.id}
                className='grid scale border border-gray-100 hover:border-green-500  transition cursor-pointer bg-gray-100 shadow-md gap-4 rounded-xl px-4 py-3 overflow-hidden'
              >
                <div className='flex gap-3 items-center'>
                  <img
                    src={job.image}
                    alt={job.title}
                    className='h-8 w-8 rounded-full shadow-md'
                  />
                  <div className='grid gap-1 w-full'>
                    <h2 className='text-[1rem] capitalize'>{job.title}</h2>
                    <p className='text-sm font-bold capitalize'>
                      {job.company}
                    </p>
                  </div>
                  <Star1 className='h-6 w-6 cursor-pointer' />
                </div>
                <div className='text-slate-800 text-[0.9rem]'>
                  {descriptionExceedLetters(job.description)}
                </div>
                <div className='text-slate-800 text-[0.9rem]'>
                  <h2 className='flex items-center gap-1'>
                    <Money4 className='h-6 w-6' />
                    <p className='font-bold'>Salary: </p>
                  </h2>
                  <p>{job.salary}</p>
                </div>
                <div className='text-slate-800 text-[0.9rem]'>
                  <h2 className='flex items-center gap-1'>
                    <Briefcase className='h-6 w-6 ' />
                    <p className='font-bold'>Type: </p>
                  </h2>
                  <p>{job.type}</p>
                </div>
                <div className='text-[0.9rem] flex items-center justify-between'>
                  <Button styles='bg-green-500 hover:bg-green-600'>
                    <ShareIcon className='h-6 w-6' />
                    <p>Share</p>
                  </Button>
                  <p className='text-right'>{job.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Home;

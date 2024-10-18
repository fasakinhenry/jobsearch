import { Link } from 'react-router-dom';
import { Backward, Briefcase } from 'iconsax-react';
import avatar from '../../assets/images/avatars/avatar4.png';
import { Button } from '../../components';
import GridBackground from '../../assets/images/grid-background.svg';
import { useEffect, useState } from 'react';
import db from '../../appwrite/databases';

const CreateJob = () => {
  const [countries, setCountries] = useState([]);

  const [title, setTitle] = useState('');
  const [companyInfo, setCompanyInfo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('python');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [type, setType] = useState('Full-time');
  const [location, setLocation] = useState('');

  const fetchAllCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const countryNames = data
      .map((country) => country.name.common)
      .sort((a, b) => a.localeCompare(b));

    setCountries(countryNames);
  };

  const createJobs = async (e) => {
    e.preventDefault();
    const newJob = {
      salary,
      title,
      description,
      location,
      type,
      requirements,
      tags,
      company_name: companyName,
      company_info: companyInfo,
    };
    const res = await db.jobs.create(newJob);
    if (res.ok) console.log('successful');
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);
  return (
    <div className='py-5'>
      <img
        src={GridBackground}
        alt='Background Grid'
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
      <div className='relative z-30 mx-auto container px-6 md:px-20'>
        <div className='sticky backdrop-blur top-0 w-full py-4 flex items-center justify-between gap-6'>
          <Link to='/' className='text-3xl font-bold'>
            Joblier
          </Link>
          <Link to='/home' className='flex items-center gap-2'>
            <Button bgColor='bg-red-500 hidden md:flex'>
              <Backward />
              <p>Back to Main App</p>
            </Button>
            <img src={avatar} className='h-8 w-8 rounded-full' alt='' />
          </Link>
        </div>
        <div className='my-10'>
          <h2 className=' text-center text-3xl font-bold'>
            What Job would you love to create ? 😎
          </h2>
          <div className='grid md:block place-items-center '>
            <form
              action=''
              className='my-6 grid w-full md:mx-auto md:max-w-2xl 2xl:maw-w-4xl rounded-xl p-5'
            >
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Job Title</label>
                <input
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  placeholder='Name your Job'
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Company Info</label>
                <textarea
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-2xl shadow-sm'
                  placeholder='Tell us more about the job'
                  value={companyInfo}
                  onChange={(e) => {
                    setCompanyInfo(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Company Name</label>
                <input
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  placeholder='Tell us more about the job'
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>
                  Job Description
                </label>
                <input
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  placeholder='Tell us more about the job'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Job Location</label>
                <select
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  {countries.length != 0 &&
                    countries.map((country) => (
                      <option
                        className='flex gap-2 capitalize items-center'
                        value={country}
                      >
                        {country}
                      </option>
                    ))}
                </select>
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Job Tags</label>
                <select
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  value={tags}
                  onChange={(e) => {
                    setTags(e.target.value);
                  }}
                >
                  <option
                    className='flex gap-2 capitalize items-center'
                    value='JavaScript'
                  >
                    javascript
                  </option>
                  <option
                    className='flex gap-2 capitalize items-center'
                    value='Python'
                  >
                    python
                  </option>
                  <option
                    className='flex gap-2 capitalize items-center'
                    value='TypeScript'
                  >
                    typescript
                  </option>
                </select>
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>
                  Name of Hirer / Hiring Firm
                </label>
                <input
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  placeholder='Enter a name '
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>
                  Job Requirements
                </label>
                <textarea
                  type='text'
                  className='h-200 px-4 py-3 border-2 border-gray-600 rounded-3xl shadow-sm'
                  placeholder='Place the requirement'
                  value={requirements}
                  onChange={(e) => {
                    setRequirements(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Job Salary</label>
                <input
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  placeholder='Enter the amount range'
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </div>
              <div className='grid gap-1 my-3'>
                <label className='text-[1.2rem] font-bold'>Job Type</label>
                <select
                  type='text'
                  className='px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm'
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value='Remote' className='flex gap-2 items-center'>
                    Remote
                  </option>
                  <option value='Full-time' className='flex gap-2 items-center'>
                    Full-time
                  </option>
                  <option value='Part-time' className='flex gap-2 items-center'>
                    Part-time
                  </option>
                </select>
              </div>
              <div className='grid gap-1 my-3' onClick={createJobs}>
                <Button styles='bg-green-500 p-4 justify-center'>
                  <Briefcase className='h-6 w-6' />
                  <p className='font-bold'>Post Job</p>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

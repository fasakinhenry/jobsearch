import { Button } from '../../components';
import UserPage from './UserPage';
import { PlusIcon, ShareIcon } from '@heroicons/react/24/outline';
import avatar from '../../assets/images/avatars/avatar6.png';
import { Briefcase, Money4, Star1 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const jobs = [
  {
    id: 1,
    company: 'Appwrite',
    title: 'Frontend Developer',
    description:
      'Join Appwrite as a Frontend Developer and help build a powerful open-source backend solution. You will work closely with the design team to create intuitive user interfaces.',
    salary: '$120k - $150k / Year',
    type: 'Remote',
    date: '2 days ago',
    location: 'Nigeria',
    image: 'https://www.appwrite.io/images/logo.svg',
    email: 'contact@appwrite.io',
    website: 'https://www.appwrite.io',
  },
  {
    id: 2,
    company: 'MongoDB',
    title: 'Senior Developer',
    description:
      "As a Senior Developer at MongoDB, you'll play a crucial role in enhancing our database solutions and collaborating with various teams to ensure seamless integration.",
    salary: '$220k - $350k / Month',
    type: 'Full-time',
    date: '2 weeks ago',
    location: 'America',
    image: 'https://www.mongodb.com/community/logo/mongodb-logo.svg',
    email: 'support@mongodb.com',
    website: 'https://www.mongodb.com',
  },
  {
    id: 3,
    company: 'Figma',
    title: 'Product Designer',
    description:
      'Figma is seeking a Product Designer to create engaging user experiences. Collaborate with cross-functional teams to design innovative solutions for our design platform.',
    salary: '$420k - $550k / Year',
    type: 'Part-time',
    date: '4 days ago',
    location: 'USA',
    image: 'https://www.figma.com/favicon.ico',
    email: 'hello@figma.com',
    website: 'https://www.figma.com',
  },
  {
    id: 4,
    company: 'Canva',
    title: 'Content Creator',
    description:
      'Join Canva as a Content Creator and help develop engaging materials for our users. You will work with our marketing team to create impactful content.',
    salary: '$120 - $150 / Month',
    type: 'Full-time',
    date: '1 month ago',
    location: 'Australia',
    image: 'https://www.canva.com/favicon.ico',
    email: 'support@canva.com',
    website: 'https://www.canva.com',
  },
  {
    id: 5,
    company: 'Adobe',
    title: 'UI/UX Designer',
    description:
      'Adobe is looking for a talented UI/UX Designer to enhance our Creative Cloud applications. Collaborate with engineers and product managers to deliver world-class design.',
    salary: '$50k - $100k / Month',
    type: 'Full-time',
    date: '25 days ago',
    location: 'USA',
    image: 'https://www.adobe.com/favicon.ico',
    email: 'contact@adobe.com',
    website: 'https://www.adobe.com',
  },
  {
    id: 6,
    company: 'Spotify',
    title: 'Product Designer',
    description:
      "As a Product Designer at Spotify, you'll focus on creating the best user experience for our listeners. Collaborate with product teams to design features for music discovery.",
    salary: '$320k - $550k / Month',
    type: 'Part-time',
    date: '16 weeks ago',
    location: 'Sweden',
    image: 'https://www.spotify.com/favicon.ico',
    email: 'jobs@spotify.com',
    website: 'https://www.spotify.com',
  },
  {
    id: 7,
    company: 'Amazon',
    title: 'Backend Engineer',
    description:
      "Amazon seeks a Backend Engineer to improve our services and help develop scalable applications. You'll be working in a fast-paced environment with a talented team.",
    salary: '$100k - $150k / Year',
    type: 'Full-time',
    date: '40 days ago',
    location: 'USA',
    image: 'https://www.amazon.com/favicon.ico',
    email: 'jobs@amazon.com',
    website: 'https://www.amazon.com',
  },
  {
    id: 8,
    company: 'Salesforce',
    title: 'Marketing Specialist',
    description:
      'Salesforce is looking for a Marketing Specialist to enhance our marketing strategies. Work with various teams to execute marketing campaigns that drive engagement.',
    salary: '$320k - $450k / Month',
    type: 'Remote',
    date: '7 days ago',
    location: 'USA',
    image: 'https://www.salesforce.com/favicon.ico',
    email: 'careers@salesforce.com',
    website: 'https://www.salesforce.com',
  },
  {
    id: 9,
    company: 'Twitter',
    title: 'Graphic Designer',
    description:
      'Join Twitter as a Graphic Designer and create stunning visuals for our platform. Collaborate with the marketing and product teams to produce engaging content.',
    salary: '$1000 - $2100 / Month',
    type: 'Full-time',
    date: '1 day ago',
    location: 'USA',
    image: 'https://twitter.com/favicon.ico',
    email: 'jobs@twitter.com',
    website: 'https://twitter.com',
  },
  {
    id: 10,
    company: 'Tesla',
    title: 'Software Engineer',
    description:
      'Tesla is seeking a Software Engineer to work on cutting-edge technologies that power our electric vehicles. Collaborate with cross-functional teams to bring innovative solutions to life.',
    salary: '$130k - $180k / Year',
    type: 'Full-time',
    date: '3 days ago',
    location: 'USA',
    image: 'https://www.tesla.com/favicon.ico',
    email: 'careers@tesla.com',
    website: 'https://www.tesla.com',
  },
  {
    id: 11,
    company: 'Netflix',
    title: 'Content Writer',
    description:
      'Netflix is looking for a talented Content Writer to create engaging scripts for our shows and movies. Collaborate with producers to develop captivating narratives.',
    salary: '$70k - $120k / Year',
    type: 'Full-time',
    date: '5 days ago',
    location: 'USA',
    image: 'https://www.netflix.com/favicon.ico',
    email: 'jobs@netflix.com',
    website: 'https://www.netflix.com',
  },
  {
    id: 12,
    company: 'Dropbox',
    title: 'Cloud Engineer',
    description:
      'As a Cloud Engineer at Dropbox, you will work on our cloud infrastructure and ensure high availability and reliability of services. Join us to build the next generation of cloud solutions.',
    salary: '$110k - $150k / Year',
    type: 'Remote',
    date: '10 days ago',
    location: 'USA',
    image: 'https://www.dropbox.com/favicon.ico',
    email: 'jobs@dropbox.com',
    website: 'https://www.dropbox.com',
  },
  {
    id: 13,
    company: 'Snap Inc.',
    title: 'AR Engineer',
    description:
      'Snap Inc. is seeking an AR Engineer to work on augmented reality experiences for our users. Collaborate with design and product teams to deliver engaging features.',
    salary: '$120k - $160k / Year',
    type: 'Full-time',
    date: '14 days ago',
    location: 'USA',
    image: 'https://www.snap.com/favicon.ico',
    email: 'careers@snap.com',
    website: 'https://www.snap.com',
  },
  {
    id: 14,
    company: 'Slack',
    title: 'Product Manager',
    description:
      'Slack is looking for a Product Manager to drive the development of new features and enhancements. Work closely with engineering and design teams to improve user experience.',
    salary: '$130k - $180k / Year',
    type: 'Remote',
    date: '20 days ago',
    location: 'USA',
    image: 'https://slack.com/favicon.ico',
    email: 'jobs@slack.com',
    website: 'https://slack.com',
  },
  {
    id: 15,
    company: 'LinkedIn',
    title: 'Data Analyst',
    description:
      'LinkedIn seeks a Data Analyst to analyze data and provide insights to enhance our platform. You will work with various teams to identify trends and improve decision-making.',
    salary: '$110k - $150k / Year',
    type: 'Full-time',
    date: '1 month ago',
    location: 'USA',
    image: 'https://www.linkedin.com/favicon.ico',
    email: 'jobs@linkedin.com',
    website: 'https://www.linkedin.com',
  },
  {
    id: 16,
    company: 'Zoom',
    title: 'Marketing Manager',
    description:
      'Zoom is looking for a Marketing Manager to develop and execute marketing strategies. Collaborate with cross-functional teams to increase brand awareness and user engagement.',
    salary: '$100k - $150k / Year',
    type: 'Remote',
    date: '15 days ago',
    location: 'USA',
    image: 'https://zoom.us/favicon.ico',
    email: 'jobs@zoom.us',
    website: 'https://zoom.us',
  },
];
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

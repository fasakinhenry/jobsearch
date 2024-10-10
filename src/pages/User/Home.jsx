import { Button } from "../../components";
import UserPage from "./UserPage";
import { PlusIcon, ShareIcon } from "@heroicons/react/24/outline";
import avatar from "../../assets/images/avatars/avatar6.png";
import { Briefcase, Money4, Star1 } from "iconsax-react";
import { Link } from "react-router-dom";

export const jobs = [
  {
    id: 1,
    company: "Appwrite",
    title: " Frontend Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$120k - $150k / Year",
    type: "Remote",
    date: "2 days ago",
    location: 'Nigeria'
  },
  {
    id: 2,
    company: "MongoDB",
    title: "Senior Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$220 - $350 / Month",
    type: "Full-time",
    date: "2 weeks ago",
    location: 'America'

  },
  {
    id: 3,
    company: "Piggivest",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$420k - $550k / Year",
    type: "Part-time",
    date: "4 days ago",
    location: 'Arab'

  },
  {
    id: 4,
    company: "Ziggi",
    title: "Content creator",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$120 - $150 / month",
    type: "Full-time",
    date: "1 month ago",
    location: 'Israel'

  },
  {
    id: 5,
    company: "Tublian",
    title: "UI/UX designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$50k - $100k / month",
    type: "Full-time",
    date: "25 days ago",
    location: 'United Kingdom'

  },
  {
    id: 6,
    company: "Canva",
    title: "Product Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$320 - $550k / month",
    type: "Part-time",
    date: "16 weeks ago",
    location: 'Brazil'

  },
  {
    id: 7,
    company: "Begg",
    title: "Backend Engineer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$100M - $150M / Year",
    type: "Full-time",
    date: "40 days ago",
    location: 'Canada'

  },
  {
    id: 8,
    company: "Clipsave",
    title: "marketer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$320k - $450 / week",
    type: "Remote",
    date: "7 days ago",
    location: 'New York'
  },
  {
    id: 9,
    company: "Pipance",
    title: " Graphic designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$1000 - $2100",
    type: "Full-time",
    date: "1 day ago",
    location: 'Russia'
  },
];
const Home = () => {
  return (
    <UserPage>
      <div className="grid">
        <div className="sticky top-0 bg-opacity-90 bg-white py-5 flex items-center justify-between">
          <h2 className="text-3xl">What Job would you like to see today ?</h2>
          <Link to="/my-jobs/create">
            <Button>
              <PlusIcon className="h-6 w-6" />
              <p>Create Job</p>
            </Button>
          </Link>
        </div>
        <div className="grid mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5 px-1 py-1">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="grid hover:scale-105 transition cursor-pointer bg-gray-100 shadow-md gap-4 rounded-xl px-4 py-3 overflow-hidden"
              >
                <div className="flex gap-3 items-center">
                  <img src={avatar} className="h-8 w-8 rounded-full" />
                  <div className="grid gap-1 w-full">
                    <h2 className="text-[1rem] capitalize">{job.title}</h2>
                    <p className="text-sm font-bold capitalize">
                      {job.company}
                    </p>
                  </div>
                  <Star1 className="h-6 w-6 cursor-pointer" />
                </div>
                <div className="text-slate-800 text-[0.9rem]">
                  {job.description}
                </div>
                <div className="text-slate-800 text-[0.9rem]">
                  <h2 className="flex items-center gap-1">
                    <Money4 className="h-6 w-6" />
                    <p className="font-bold">Salary: </p>
                  </h2>
                  <p>{job.salary}</p>
                </div>
                <div className="text-slate-800 text-[0.9rem]">
                  <h2 className="flex items-center gap-1">
                    <Briefcase className="h-6 w-6 " />
                    <p className="font-bold">Type: </p>
                  </h2>
                  <p>{job.type}</p>
                </div>
                <div className="text-[0.9rem] flex items-center justify-between">
                  <Button styles="bg-green-500 hover:bg-green-600">
                    <ShareIcon className="h-6 w-6" />
                    <p>Share</p>
                  </Button>
                  <p className="text-right">{job.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Home;

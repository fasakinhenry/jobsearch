import { Button } from "../../components";
import UserPage from "./UserPage";
import { PlusIcon, ShareIcon } from "@heroicons/react/24/outline";
import avatar from "../../assets/images/avatars/avatar6.png";
import { Briefcase, Money4, Star1 } from "iconsax-react";

const jobs = [
  {
    id: 1,
    title: "Appwrite Frontend Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$120k - $150k / Year",
    type: "Remote",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "MongoDB Senior Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$220 - $350 / Month",
    type: "Full-time",
    date: "2 weeks ago",
  },
  {
    id: 3,
    title: "Web Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$420k - $550k / Year",
    type: "Part-time",
    date: "4 days ago",
  },
  {
    id: 4,
    title: "Content creator",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$120 - $150 / month",
    type: "Full-time",
    date: "1 month ago",
  },
  {
    id: 5,
    title: "Tublian UI/UX designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$50k - $100k / month",
    type: "Full-time",
    date: "25 days ago",
  },
  {
    id: 6,
    title: "Canva Product Designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$320 - $550k / month",
    type: "Part-time",
    date: "16 weeks ago",
  },
  {
    id: 7,
    title: "Begg Backend Engineer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$100M - $150M / Year",
    type: "Full-time",
    date: "40 days ago",
  },
  {
    id: 8,
    title: "Clipsave marketer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$320k - $450 / week",
    type: "Remote",
    date: "7 days ago",
  },
  {
    id: 9,
    title: "Pipance Graphic designer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quidem nesciunt quod!",
    salary: "$1000 - $2100",
    type: "Full-time",
    date: "1 day ago",
  },
];
const Home = () => {
  return (
    <UserPage>
      <div className="grid">
        <div className="sticky top-0 bg-opacity-90 bg-white py-5 flex items-center justify-between">
          <h2 className="text-3xl">What Job would you like to see today ?</h2>
          <Button>
            <PlusIcon className="h-6 w-6" />
            <p>Create Job</p>
          </Button>
        </div>
        <div className="grid mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-5 px-1 py-1">
            {jobs.map((job) => (
              <div key={job.id} className="grid hover:scale-105 transition cursor-pointer bg-gray-100 shadow-md gap-4 rounded-xl px-4 py-3 overflow-hidden">
                <div className="flex gap-3 items-center">
                  <img src={avatar} className="h-8 w-8 rounded-full" />
                  <h2 className="text-[1rem] w-full">
                   {job.title}
                  </h2>
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

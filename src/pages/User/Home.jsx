import { Button } from "../../components";
import UserPage from "./UserPage";
import { PlusIcon } from "@heroicons/react/24/outline";
import avatar from "../../assets/images/avatars/avatar6.png";
import {
  Briefcase,
  Money4,
  Star,
  Star1,
} from "iconsax-react";
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
            <div className="grid bg-gray-100 shadow-md gap-4 rounded-xl px-4 py-3 overflow-hidden">
              <div className="flex gap-3 items-center">
                <img src={avatar} className="h-8 w-8 rounded-full" />
                <h2 className="text-[1rem] w-full">
                  Appwrite FrontEnd Developer
                </h2>
                <Star1 className="h-6 w-6 cursor-pointer" />
              </div>
              <div className="text-slate-800 text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos quidem nesciunt quod!
              </div>
              <div className="text-slate-800 text">
                <h2 className="flex items-center gap-1">
                  <Money4 className="h-6 w-6" />
                  <p className="font-bold">Salary: </p>
                </h2>
                <p>$120k - $150k / Year</p>
              </div>
              <div className="text-slate-800 text">
                <h2 className="flex items-center gap-1">
                  <Briefcase className="h-6 w-6 " />
                  <p className="font-bold">Type: </p>
                </h2>
                <p>Remote</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Home;

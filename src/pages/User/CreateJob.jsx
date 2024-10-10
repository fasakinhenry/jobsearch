import { Link } from "react-router-dom";
import { SearchNormal } from "iconsax-react";
import avatar from "../../assets/images/avatars/avatar4.png";
import {Button} from "../../components";

const CreateJob = () => {
  return (
    <div className="flex items-center justify-between md:justify-normal gap-20">
      <Link to="/" className="text-3xl font-bold">
        Joblier
      </Link>
      <div className="hidden md:flex bg-white border-2 px-4 w-2/4 mx-auto py-3 rounded-full items-center gap-3">
        <SearchNormal className="text-slate-500 h-6 w-6" />
        <input type="text" className="w-full" placeholder="Search for jobs" />
      </div>
      <div className="flex items-center gap-2">
        <Button bgColor="bg-red-500 hidden md:flex">
          <Logout />
          <p>Logout</p>
        </Button>
        <img src={avatar} className="h-8 w-8 rounded-full" alt="" />
      </div>
    </div>
  );
};

export default CreateJob;

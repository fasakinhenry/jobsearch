import { Link } from "react-router-dom";
import { Backward, Logout } from "iconsax-react";
import avatar from "../../assets/images/avatars/avatar4.png";
import { Button } from "../../components";

const CreateJob = () => {
  return (
    <div className="py-5">
      <div className="container px-6 md:px-20">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="text-3xl font-bold">
            Joblier
          </Link>
          <Link to="/home" className="flex items-center gap-2">
            <Button bgColor="bg-red-500 hidden md:flex">
              <Backward />
              <p>Back to Main App</p>
            </Button>
            <img src={avatar} className="h-8 w-8 rounded-full" alt="" />
          </Link>
        </div>
        <div className="my-10">
          <h2 className=" text-center text-3xl font-bold">Create Jobs</h2>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

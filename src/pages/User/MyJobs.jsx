import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../../components";
import UserPage from "./UserPage";
import { Link } from "react-router-dom";
const MyJobs = () => {
  return (
    <UserPage>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">My Jobs</h2>
        <Link to="/my-jobs/create">
          <Button>
            <PlusCircleIcon className="h-6 w-6" />
            <p>Create a Job</p>
          </Button>
        </Link>
      </div>
    </UserPage>
  );
};

export default MyJobs;

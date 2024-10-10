import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Backward } from "iconsax-react";
import avatar from '../../assets/images/avatars/avatar6.png'

const ParticularJob = () => {
  return (
    <div className="py-5">
      <div className="container px-6 md:px-20">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="text-3xl font-bold">
            Joblier
          </Link>
          <div className="flex items-center gap-2">
            <Button bgColor="bg-red-500 hidden md:flex">
              <Backward />
              <p>Back to Main App</p>
            </Button>
            <img src={avatar} className="h-8 w-8 rounded-full" alt="" />
          </div>
        </div>
        <div className="my-10">
          <div className="grid gap-3 py-3 border-b-2">
            <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
                  </div>
                  <div className="grid  py-3 border-b-2">
                      <h2 className="font-bold">Description:</h2>
                      <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe eaque accusamus consectetur labore nobis fuga error dolorem vel ipsa alias adipisci eveniet reprehenderit ullam iure provident perferendis, corrupti repellendus consequuntur sapiente maiores! Molestias dolore, libero magni ea nesciunt excepturi pariatur maxime facilis voluptas deserunt, molestiae, placeat quam id officiis!</p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularJob;

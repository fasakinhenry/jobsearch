import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Backward, Building3, Map, MoneyChange, Note } from "iconsax-react";
import avatar from "../../assets/images/avatars/avatar6.png";

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
          <div className="grid  md:flex md:gap-5 items-start">
            <div className="grid ">
              <div className="flex items-center justify-between  bg-gray-100 rounded-xl p-4 my-5 shadow-md">
                <h2 className="text-3xl">Lorem ipsum dolor sit amet.</h2>
                <p className="text-sm">Appwrite</p>
              </div>
              <div className="grid gap-1 bg-gray-100 rounded-xl p-4 my-5 shadow-md">
                <div className="flex items-center gap-1">
                  <Note className="h-6 w-6" />
                  <h2 className="font-bold">Description:</h2>
                </div>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  saepe eaque accusamus consectetur labore nobis fuga error
                  dolorem vel ipsa alias adipisci eveniet reprehenderit ullam
                  iure provident perferendis, corrupti repellendus consequuntur
                  sapiente maiores! Molestias dolore, libero magni ea nesciunt
                  excepturi pariatur maxime facilis voluptas deserunt,
                  molestiae, placeat quam id officiis!
                </p>
              </div>
              <div className="grid gap-1 bg-gray-100 rounded-xl p-4 my-5 shadow-md">
                <div className="flex gap-1 items-end">
                  <MoneyChange className="h-6 w-6" />
                  <h2 className="font-bold">Salary:</h2>
                </div>
                <p className="text-md">$450 - $550 / month</p>
              </div>
              <div className="grid gap-1 bg-gray-100 rounded-xl p-4 my-5 shadow-md">
                <div className="flex gap-1 items-end">
                  <Map className="h-6 w-6" />
                  <h2 className="font-bold">Location:</h2>
                </div>
                <p className="text-md">Nigeria</p>
              </div>
            </div>
            <div className="grid w-full">
              <div className="grid  bg-gray-100 rounded-xl p-4 my-5 shadow-md">
                <div className="flex items-center gap-1 mb-5">
                  <Building3 className="h-8 w-8" />
                  <div className="grid ">
                    <h2 className="font-bold text-lg">Company Info:</h2>
                    <p className="text-sm ">Appwrite</p>
                  </div>
                </div>

                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  saepe eaque accusamus consectetur labore nobis fuga error
                  dolorem vel ipsa alias adipisci eveniet reprehenderit ullam
                  iure provident perferendis, corrupti repellendus consequuntur
                  sapiente maiores! Molestias dolore, libero magni ea nesciunt
                  excepturi pariatur maxime facilis voluptas deserunt,
                  molestiae, placeat quam id officiis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularJob;

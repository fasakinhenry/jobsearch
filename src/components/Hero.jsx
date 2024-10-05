import {
  LightBulbIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
const Hero = () => {
  return (
    <div className=" py-5 h-full">
      <div className="container px-40">
        <div className="grid  place-items-start">
          <div className="grid py-6 max-w-5xl mx-auto">
            <div className="text-center grid gap-8">
              <h2 className="text-6xl helvetica-bold font-extrabold">
                Job Opportunities at Your Fingertips.
              </h2>
              <p className="text-md">
                Navigate Your Future: Your Job Search Made Simple!
              </p>
            </div>
            <div className="py-5">
              <div className="items-center flex w-4/5 mx-auto py-2 px-3 rounded-full overflow-hidden  bg-white shadow-md">
                <div className="px-3">
                  <LightBulbIcon className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search for jobs"
                  className="w-4/5 px-3"
                />
                <div className="w-1/5 text-center flex items-center justify-center gap-2 btn-color px-3 py-4 rounded-full"> 
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  <p>Search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

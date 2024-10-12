import { Link } from "react-router-dom";
import { Backward } from "iconsax-react";
import avatar from "../../assets/images/avatars/avatar4.png";
import { Button } from "../../components";
import { GridBackground } from "../App/LandingPage";
import { useEffect, useState } from "react";

const CreateJob = () => {
  const [countries, setCountries] = useState([]);
  const fetchAllCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json()
    const countryNames = data
      .map(country => country.name.common)
      .sort((a,b) => a.localeCompare(b))

    setCountries(countryNames)
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);
  return (
    <div className="py-5">
      <GridBackground />
      <div className="relative z-30 container px-6 md:px-20">
        <div className="sticky backdrop-blur top-0 w-full py-4 flex items-center justify-between gap-6">
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
          <h2 className=" text-center text-3xl font-bold">
            What Job would you love to create ? 😎
          </h2>
          <form
            action=""
            className="my-6 grid md:mx-auto md:max-w-2xl 2xl:max-w-4xl rounded-xl p-5"
          >
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">Job Title</label>
              <input
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
                placeholder="Name your Job"
              />
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">Job Description</label>
              <input
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
                placeholder="Tell us more about the job"
              />
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">Job Location</label>
              <select
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
              >
                {countries.length != 0 && countries.map((country) => (
                  <option className="flex gap-2 capitalize items-center" value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">
                Name of Hirer / Hiring Firm
              </label>
              <input
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
                placeholder="Enter a name "
              />
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">
                Job Requirements
              </label>
              <textarea
                type="text"
                className="h-200 px-4 py-3 border-2 border-gray-600 rounded-3xl shadow-sm"
                placeholder="Place the requirement"
              />
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">Job Salary</label>
              <input
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
                placeholder="Enter the amount range"
              />
            </div>
            <div className="grid gap-1 my-3">
              <label className="text-[1.2rem] font-bold">Job Type</label>
              <select
                type="text"
                className="px-4 py-3 border-2 border-gray-600 rounded-full shadow-sm"
              >
                <option className="flex gap-2 items-center">Remote</option>
                <option className="flex gap-2 items-center">Full-time</option>
                <option className="flex gap-2 items-center">Part-time</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

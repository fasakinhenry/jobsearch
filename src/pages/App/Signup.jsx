import { useState } from 'react';
import { GridBackground } from './LandingPage';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Briefcase } from 'iconsax-react';
import Google from '../../assets/images/icons/Google.svg';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: { name: '', email: '', password: '' },
    socialProfiles: { linkedIn: '', twitter: '', github: '' },
    aboutBio: { about: '', bio: '' },
  });

  const handleNext = () => {
    // Basic validation logic before moving to the next step
    if (step === 1 && !formData.personalDetails.name)
      return alert('Please enter your name.');
    if (step === 2 && !formData.socialProfiles.linkedIn)
      return alert('Please add your LinkedIn profile.');
    if (step === 3 && !formData.aboutBio.about)
      return alert('Please provide your about details.');

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [name]: value },
    }));
  };

  return (
    <div className='flex bg-blue-50 font-sans overflow-hidden'>
      <GridBackground />
      <div className='min-h-screen w-full z-10 relative flex'>
        <div className='md:flex hidden w-full p-8 bg-green-500 text-white'>
          <div className='flex flex-col flex-grow justify-center items-center text-center gap-3'>
            <Briefcase className='w-60 h-60' />
            <h2 className='text-4xl font-bold'>Join Joblier Today.</h2>
            <p className='text-[1.1rem]'>
              Sign up and find your dream job with Joblier's powerful features.
            </p>
          </div>
        </div>
        <div className='flex flex-col w-full md:3/5 p-8'>
          <form className='flex-grow flex flex-col justify-center max-w-md mx-auto w-full'>
            <h2 className='text-4xl mb-8 font-bold text-left'>
              Create your account 🖐
            </h2>

            {step === 1 && (
              <div className='grid gap-2'>
                <p className='mb-2 text-[1.2rem]'>Share a bit more about you</p>
                <div className='grid gap-1'>
                  <label className='font-bold'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Full Name'
                    value={formData.personalDetails.name}
                    onChange={(e) => handleChange(e, 'personalDetails')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>Email:</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='example@gmail.com'
                    value={formData.personalDetails.email}
                    onChange={(e) => handleChange(e, 'personalDetails')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>Password:</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Choose a secure password'
                    value={formData.personalDetails.password}
                    onChange={(e) => handleChange(e, 'personalDetails')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className='grid gap-2'>
                <div className='flex justify-between items-center mb-2'>
                  <button className='font-bold py-4 px-7 hover:bg-gray-300 cursor-pointer bg-gray-200 rounded-full'>
                    Upload LinkedIn Bio
                  </button>
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>LinkedIn:</label>
                  <input
                    type='text'
                    name='linkedIn'
                    placeholder='LinkedIn Profile URL'
                    value={formData.socialProfiles.linkedIn}
                    onChange={(e) => handleChange(e, 'socialProfiles')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>Twitter:</label>
                  <input
                    type='text'
                    name='twitter'
                    placeholder='Twitter Handle'
                    value={formData.socialProfiles.twitter}
                    onChange={(e) => handleChange(e, 'socialProfiles')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>GitHub:</label>
                  <input
                    type='text'
                    name='github'
                    placeholder='GitHub Username'
                    value={formData.socialProfiles.github}
                    onChange={(e) => handleChange(e, 'socialProfiles')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className='grid gap-2'>
                <p className='mb-2 text-[1.2rem]'>
                  Craft your story: Showcase your unique talents, profession and
                  experience
                </p>
                <div className='grid gap-1'>
                  <label className='font-bold'>About:</label>
                  <textarea
                    name='about'
                    placeholder='Tell us a little about yourself'
                    value={formData.aboutBio.about}
                    onChange={(e) => handleChange(e, 'aboutBio')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded shadow-sm'
                  />
                </div>
                <div className='grid gap-1'>
                  <label className='font-bold'>Bio:</label>
                  <textarea
                    name='bio'
                    placeholder='Write a brief bio'
                    value={formData.aboutBio.bio}
                    onChange={(e) => handleChange(e, 'aboutBio')}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className='text-center'>
                <p className='font-bold mb-2'>
                  Review your details before submission
                </p>
                {/* You can list all the formData here for review */}
                <button className='bg-green-500 text-white py-3 px-7 rounded-full font-bold hover:shadow-md w-full'>
                  Submit
                </button>
              </div>
            )}

            <div className='flex justify-between mt-4'>
              {step > 1 && (
                <button
                  type='button'
                  onClick={handleBack}
                  className='text-gray-500 font-bold py-2 w-full border-green-500 border-2 mr-2 rounded-full'
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  type='button'
                  onClick={handleNext}
                  className='bg-green-500 text-white py-4 px-7 rounded-full font-bold hover:shadow-md w-full'
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from 'react';
import gridBackground from '../../assets/images/gridbackground.svg';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Briefcase } from 'iconsax-react';
import Google from '../../assets/images/icons/Google.svg';
import { useAuth } from '../../context/AuthContext';
import { account } from '../../appwrite/config';
import { ID } from 'appwrite';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Individual states for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const [about, setAbout] = useState('');
  const [bio, setBio] = useState('');

  // Create a user object
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const { user, registerUser } = useAuth();

  const handleNext = () => {
    if (step === 1 && !name) return alert('Please enter your name.');
    if (step === 2 && !linkedIn)
      return alert('Please add your LinkedIn profile.');
    if (step === 3 && !about)
      return alert('Please provide your about details.');

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const promise = account.create(ID.unique(), user.email, user.password, user.name);
    promise.then(
      function (response) {
        console.log(response);
        navigate('/home', {
          state: {
            userId: response?.$id,
            name: response?.name,
          },
        }); //success
      },
      function (err) {
        console.log(err); //failure
      }
    );

    // const userInfo = {
    //   email: email.trim(),
    //   password: password,
    //   username: name.trim(),
    // };
    // console.log(registerUser(userInfo));
    // registerUser(userInfo);
    // try {
    //   await registerUser(userInfo);
    // } catch (error) {
    //   setError('Failed to create account. Please try again.');
    // } finally {
    //   setLoading(false);
    // }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  return (
    <div className='flex bg-blue-50 font-sans overflow-hidden'>
      <img
        src={gridBackground}
        alt='Background Grid'
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
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
          <form
            onSubmit={handleSubmit}
            className='flex-grow flex flex-col justify-center max-w-md mx-auto w-full'
          >
            <h2 className='text-4xl mb-8 font-bold text-left'>
              Create your account 🖐
            </h2>
            {error && <p className='text-red-500'>{error}</p>}
            {loading && <p>Loading...</p>}

            {step === 1 && (
              <div className="grid gap-2">
                <p className="mb-2 text-[1.1rem] font-medium">
                  Share a bit more about you 🤔
                </p>
                <div className="grid gap-1">
                  <label className="font-bold">Name:</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className="grid gap-1">
                  <label className="font-bold">Email:</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='example@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className="grid gap-1">
                  <label className="font-bold">Password:</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Choose a secure password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-2">
                <p className="mb-2 text-[1.1rem] font-medium">
                  Add other social channels ✨
                </p>
                <div className='grid gap-1'>
                  <label className='font-bold'>LinkedIn:</label>
                  <input
                    type='text'
                    name='linkedIn'
                    placeholder='LinkedIn Profile URL'
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className="grid gap-1">
                  <label className="font-bold">Twitter:</label>
                  <input
                    type='text'
                    name='twitter'
                    placeholder='Twitter Handle'
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
                <div className="grid gap-1">
                  <label className="font-bold">GitHub:</label>
                  <input
                    type='text'
                    name='github'
                    placeholder='GitHub Username'
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded-full shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className='grid gap-2'>
                <p className='mb-2 text-[1.1rem] font-medium'>
                  Craft your story: Showcase your unique talents, profession,
                  and experience 😎
                </p>
                <div className="grid gap-1">
                  <label className="font-bold">About:</label>
                  <textarea
                    name='about'
                    placeholder='Tell us a little about yourself'
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded shadow-sm'
                  />
                </div>
                <div className="grid gap-1">
                  <label className="font-bold">Bio:</label>
                  <textarea
                    name='bio'
                    placeholder='Write a brief bio'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className='w-full border-2 border-gray-200 px-4 py-3 rounded shadow-sm'
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className='text-center'>
                <p className='mb-5'>
                  🎉 You did it! Hit the{' '}
                  <span className='font-bold'>submit</span> button to explore
                  what's in for you or <span className='font-bold'>Back</span>{' '}
                  to review submission
                </p>
                {/* You can list all the formData here for review */}
                <button
                  type='submit'
                  className='bg-green-500 text-white py-3 px-7 rounded-full font-bold hover:shadow-md w-full'
                >
                  Submit
                </button>
              </div>
            )}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-gray-500 font-bold py-2 w-full border-green-500 border-2 mr-2 rounded-full"
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-green-500 text-white py-3 px-7 rounded-full font-bold hover:shadow-md w-full"
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

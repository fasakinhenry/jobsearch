import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <div className='py-10'>
      <div className='px-20 container mx-auto'>
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>Joblier</h2>
          <div className='flex justify-center items-center gap-5'>
            <Link to='/' className='text-md'>
              Home
            </Link>
            <Link to='/search' className='text-md'>
              Search
            </Link>
            <Link to='/about' className='text-md'>
              About
            </Link>
            <Link to='/careers' className='text-md'>
              Careers
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <Button filled={false}>Login</Button>
            <Button filled={true}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

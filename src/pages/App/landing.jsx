import { Header, Hero } from '../../components';
const Landing = () => {
  return (
    <div className='bg-pattern blue h-[100vh] w-[100vw] overflow-hidden'>
      <div className='flex flex-col h-full'>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Landing;

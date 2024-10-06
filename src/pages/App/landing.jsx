import { Header, Hero, Footer } from '../../components';
const Landing = () => {
  return (
    <div className='bg-pattern blue h-[100vh] w-[100vw] overflow-hidden'>
      <div className='flex flex-col h-full'>
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;

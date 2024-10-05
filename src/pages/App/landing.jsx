import { Header, Hero } from "../../components";
const Landing = () => {
  return (
    <div className="blue grid h-[100vh] w-[100vw] overflow-hidden">
      <div className="grid justify-content-start">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Landing;

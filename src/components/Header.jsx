import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-10">
      <div className="px-20 container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Job Search</h2>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-md">Home</Link>
            <Link to="/" className="text-md">Search</Link>
            <Link to="/" className="text-md">Careers</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

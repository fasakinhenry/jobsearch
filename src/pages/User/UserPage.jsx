import { TopBar } from "../../components";
const UserPage = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div className="relative">
        <div className="container mx-auto px-6 md:px-20 py-2">
        {children}
        </div>
      </div>
    </div>
  );
};

export default UserPage;

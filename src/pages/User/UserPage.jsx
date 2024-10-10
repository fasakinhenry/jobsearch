import { TopBar } from "../../components";
const UserPage = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default UserPage;

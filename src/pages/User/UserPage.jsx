const UserPage = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default UserPage;

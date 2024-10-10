const Button = ({children}) => {
  return (
    <button className="text-white flex items-center gap-2 bg-red-500 rounded-full px-3 py-2">
      {children}
    </button>
  );
};

export default Button;

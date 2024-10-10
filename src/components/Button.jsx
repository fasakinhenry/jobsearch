const Button = ({children, bgColor}) => {
  return (
    <button className={`${bgColor ?? 'bg-green-500'} text-white flex items-center gap-2 rounded-full px-3 py-2`}>
      {children}
    </button>
  );
};

export default Button;

const Button = ({children, styles}) => {
  return (
    <button className={` text-white flex items-center gap-2 rounded-full px-3 py-2 ${styles ?? 'bg-green-500'}`}>
      {children}
    </button>
  );
};

export default Button;

const Button = ({ filled, children }) => {
  return filled ? (
    <div className='px-4 py-2 rounded-3xl btn-color text-white  cursor-pointer'>
      {children}
    </div>
  ) : (
    <div className='px-4 py-2 rounded-3xl border-2 hover:text-white btn-color-hover border-btn cursor-pointer'>
      {children}
    </div>
  );
};

export default Button;

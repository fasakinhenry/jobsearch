const Button = ({ filled, children }) => {
  return filled ? (
    <div className="px-4 py-3 rounded-3xl btn-color font-bold text-white  cursor-pointer">
      {children}
    </div>
  ) : (
    <div className="px-4 py-3 rounded-3xl border-2 font-bold hover:text-white btn-color-hover border-btn cursor-pointer">
      {children}
    </div>
  );
};

export default Button;

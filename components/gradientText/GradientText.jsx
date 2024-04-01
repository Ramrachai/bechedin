const GradientText = ({ children, className }) => {
  return (
    <span
      className={`${className} bg-clip-text text-transparent bg-gradient-to-r from-purple-500  to-red-500`}>
      {children}
    </span>
  );
};

export default GradientText;

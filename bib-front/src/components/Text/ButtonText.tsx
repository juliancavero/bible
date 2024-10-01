type ButtonTextProps = {
  className?: string;
  children: React.ReactNode;
};

const ButtonText = ({ className = "", children }: ButtonTextProps) => {
  return (
    <h1
      className={`text-xl md:text-3xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export default ButtonText;

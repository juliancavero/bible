type StrongTextProps = {
  className?: string;
  children: React.ReactNode;
};

const StrongText = ({ className = "", children }: StrongTextProps) => {
  return (
    <h1
      className={`text-xl md:text-3xl font-extrabold tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export default StrongText;

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  padding?: number;
};

const Card = ({ padding = 4, children, className = "" }: CardProps) => {
  return (
    <div
      className={`p-${padding} bg-background rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

const BodyText = ({ children, className }: BodyTextProps) => {
  return (
    <h3
      className={`text-md tracking-tight text-black dark:text-zinc-200 ${className}`}
    >
      {children}
    </h3>
  );
};

export default BodyText;

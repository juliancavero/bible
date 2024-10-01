type LinkProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Link = ({ onClick, children }: LinkProps) => {
  return (
    <a className="text-right block cursor-pointer underline" onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;

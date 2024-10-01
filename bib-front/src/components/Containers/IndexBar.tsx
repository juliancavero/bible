type IndexBarProps = {
  sticky?: boolean;
  children?: React.ReactNode;
};

const IndexBar = ({ sticky = false, children }: IndexBarProps) => {
  return (
    <div
      className={`w-full flex flex-row items-center p-3 bg-white dark:bg-gray-800 shadow-sm ${
        sticky && "sticky top-0 z-10"
      }`}
    >
      {children}
    </div>
  );
};

export default IndexBar;

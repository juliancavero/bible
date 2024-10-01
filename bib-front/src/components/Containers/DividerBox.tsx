type DividerBoxProps = {
  children: React.ReactNode;
};

const DividerBox = ({ children }: DividerBoxProps) => {
  return (
    <div
      className="border-t border-b border-gray-300 dark:border-gray-700
    my-4 py-2"
    >
      {children}
    </div>
  );
};

export default DividerBox;

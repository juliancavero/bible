type BiColorListItemType = {
  colored?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const BiColorListItem = ({
  colored = false,
  children,
  ...props
}: BiColorListItemType) => {
  return (
    <div
      className={`px-2 py-1 cursor-pointer ${
        colored
          ? "bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500"
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BiColorListItem;

import { BookOpenIcon } from "@heroicons/react/24/outline";

type BookProps = {
  filled?: boolean;
  size?: number;
  className?: string;
};

const Book = ({ filled = false, size = 6, className }: BookProps) => {
  return (
    <BookOpenIcon
      className={`h-${size} w-${size} stroke-3 stroke-gray-300 dark:stroke-gray-600 ${
        filled && "stroke-1 fill-gray-200 dark:fill-gray-400"
      } ${className}`}
    />
  );
};

export default Book;

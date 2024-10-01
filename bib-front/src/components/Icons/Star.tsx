import { StarIcon } from "@heroicons/react/24/outline";

type StarProps = {
  filled?: boolean;
  className?: string;
};

const Star = ({ filled = false, className }: StarProps) => {
  return (
    <StarIcon
      className={`h-6 w-6 stroke-3 stroke-yellow-300 dark:stroke-yellow-600 ${
        filled && "stroke-1 fill-yellow-200 dark:fill-yellow-400"
      } ${className}`}
    />
  );
};

export default Star;

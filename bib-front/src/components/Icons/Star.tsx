import { StarIcon } from "@heroicons/react/24/outline";

type StarProps = {
  filled?: boolean;
  size?: number;
  className?: string;
};

const Star = ({ filled = false, size = 6, className }: StarProps) => {
  return (
    <StarIcon
      className={`h-${size} w-${size} stroke-3 stroke-yellow-300 dark:stroke-yellow-600 ${
        filled && "stroke-1 fill-yellow-200 dark:fill-yellow-400"
      } ${className}`}
    />
  );
};

export default Star;

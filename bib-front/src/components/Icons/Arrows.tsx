import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

const IconButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Button size={"icon"} variant={"link"} onClick={onClick}>
    {children}
  </Button>
);

const ArrowLeft = (
  <ArrowLeftIcon className="stroke-2 h-6 w-6 text-black dark:text-zinc-200" />
);
const ArrowRight = (
  <ArrowRightIcon className="stroke-2 h-6 w-6 text-black dark:text-zinc-200" />
);
const ChevronUp = (
  <ChevronUpIcon className="stroke-2 h-6 w-6 text-black dark:text-zinc-200" />
);
const ChevronDown = (
  <ChevronDownIcon className="stroke-2 h-6 w-6 text-black dark:text-zinc-200" />
);

type ArrowIconProps = {
  withButton?: boolean;
  onClick?: () => void;
  dir?: "left" | "right";
};

const HorizontalArrow = ({
  withButton = false,
  dir = "left",
  onClick = undefined,
}: ArrowIconProps) => {
  if (withButton) {
    return (
      <IconButton onClick={onClick}>
        <>{dir === "left" ? ArrowLeft : ArrowRight}</>
      </IconButton>
    );
  }
  return <>{dir === "left" ? ArrowLeft : ArrowRight}</>;
};

type VerticalArrowIconProps = {
  withButton?: boolean;
  onClick?: () => void;
  dir?: "up" | "down";
};

const VerticalArrow = ({
  withButton = false,
  dir = "down",
  onClick = undefined,
}: VerticalArrowIconProps) => {
  if (withButton) {
    return (
      <IconButton onClick={onClick}>
        <>{dir === "up" ? ChevronUp : ChevronDown}</>
      </IconButton>
    );
  }
  return <>{dir === "up" ? ChevronUp : ChevronDown}</>;
};

export { HorizontalArrow, VerticalArrow };

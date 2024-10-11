import { Cog6ToothIcon } from "@heroicons/react/24/outline";

type SettingsProps = {
  filled?: boolean;
  size?: number;
  className?: string;
};

const Settings = ({ filled = false, size = 6, className }: SettingsProps) => {
  return (
    <Cog6ToothIcon
      className={`h-${size} w-${size} stroke-3 stroke-zinc-300 dark:stroke-zinc-600 ${
        filled && "stroke-1 fill-zinc-200 dark:fill-zinc-400"
      } ${className}`}
    />
  );
};

export default Settings;

import AppRoutes from "@/context/router/routes";
import useNav from "@/hooks/useNav";
import {
  BookOpenIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

const tabs = [
  {
    name: "Inicio",
    path: AppRoutes.HOME,
    icon: <HomeIcon />,
  },
  {
    name: "Santoral",
    path: AppRoutes.SAINTS,
    icon: <UserIcon />,
  },
  {
    name: "La Biblia",
    path: AppRoutes.BIBLE,
    icon: <BookOpenIcon />,
  },
  {
    name: "Consultas",
    path: AppRoutes.QUESTIONS,
    icon: <ChatBubbleLeftEllipsisIcon />,
  },
  {
    name: "Ajustes",
    path: AppRoutes.SETTINGS,
    icon: <Cog6ToothIcon />,
  },
];

const BottomTabs = () => {
  const { goTo, activeTab } = useNav();

  return (
    <BottomBox>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          active={activeTab === tab.path}
          onClick={() => goTo(tab.path)}
        >
          <Button
            className={`${
              activeTab === tab.path
                ? "text-white"
                : "text-black dark:text-zinc-200"
            }`}
            variant={"link"}
            size={"icon"}
          >
            {tab.icon}
          </Button>
          <Span active={activeTab === tab.path}>{tab.name}</Span>
        </Tab>
      ))}
    </BottomBox>
  );
};

export default BottomTabs;

type BottomBoxProps = {
  children: React.ReactNode;
};

const BottomBox = ({ children }: BottomBoxProps) => {
  return (
    <div className="flex flex-row justify-around items-center gap-2 p-1 bg-gray-100 border-t border-gray-300 sticky bottom-0 z-50">
      {children}
    </div>
  );
};

type TabProps = {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Tab = ({ active, children, onClick }: TabProps) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-2 p-1 w-full rounded-sm bg-gray-100 border-t border-gray-300 z-50 cursor-pointer ${
        active
          ? "bg-indigo-300 text-white dark:bg-indigo-800 dark:text-zinc-200"
          : "bg-white text-black dark:bg-gray-800 dark:text-zinc-200"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

type SpanProps = {
  children: React.ReactNode;
  active?: boolean;
};

const Span = ({ children, active }: SpanProps) => {
  return (
    <span
      className={`text-lg hidden md:block ${
        active ? "text-white font-bold" : "text-black dark:text-zinc-200"
      }`}
    >
      {children}
    </span>
  );
};

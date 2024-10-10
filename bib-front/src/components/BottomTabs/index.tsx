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
    name: "Perfil",
    path: AppRoutes.PROFILE,
    icon: <Cog6ToothIcon />,
  },
];

export const BottomTabs = () => {
  const { goTo, activeTab, location } = useNav();

  return (
    <BottomBox>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          active={location.pathname.includes(tab.path)}
          onClick={() => goTo(tab.path)}
        >
          <Button variant={"icon"} size={"icon"}>
            {tab.icon}
          </Button>
          <Span active={activeTab === tab.path}>{tab.name}</Span>
        </Tab>
      ))}
    </BottomBox>
  );
};

export const LeftTabs = () => {
  const { goTo, activeTab } = useNav();

  return (
    <LeftMenu>
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          active={activeTab === tab.path}
          onClick={() => goTo(tab.path)}
        >
          <Button variant={"icon"} size={"icon"}>
            {tab.icon}
          </Button>
          <Span active={activeTab === tab.path}>{tab.name}</Span>
        </Tab>
      ))}
    </LeftMenu>
  );
};

type BottomBoxProps = {
  children: React.ReactNode;
};

const BottomBox = ({ children }: BottomBoxProps) => {
  return (
    <div className="block md:hidden flex flex-row justify-around items-center gap-2 p-1 bg-gray-100 border-t border-gray-300 sticky bottom-0 z-50">
      {children}
    </div>
  );
};

const LeftMenu = ({ children }: BottomBoxProps) => {
  return (
    <div className="min-w-60 hidden md:block flex flex-col justify-around items-center gap-2 p-1 bg-background-alternate border-t border-gray-300 sticky top-0 left-0">
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
      className={`text-black dark:text-zinc-100 flex flex-row items-center justify-center md:justify-start gap-2 p-1 w-full rounded-sm border-t border-gray-300 z-50 cursor-pointer ${
        active ? "bg-primary" : "bg-background"
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
    <span className={`text-lg hidden md:block ${active ? "font-bold" : ""}`}>
      {children}
    </span>
  );
};

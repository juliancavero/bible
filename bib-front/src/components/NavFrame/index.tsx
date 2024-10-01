import { Outlet } from "react-router-dom";
import BottomTabs from "../BottomTabs";

const NavFrame = () => {
  return (
    <Principal>
      <FlexContainer>
        <Outlet />
      </FlexContainer>
      <BottomTabs />
    </Principal>
  );
};

export default NavFrame;

type CommonProps = {
  children: React.ReactNode;
};

const FlexContainer = ({ children }: CommonProps) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      {children}
    </div>
  );
};

const Principal = ({ children }: CommonProps) => {
  return (
    <div
      className="
    flex flex-col 
    h-full min-h-screen
    bg-primary dark:bg-gray-900
    "
    >
      {children}
    </div>
  );
};

/* const FlexContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
});

const Principal = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100vh",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  padding: 0,
  backgroundColor: "#f0f7fe",
});
 */

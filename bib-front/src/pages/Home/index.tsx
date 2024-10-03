import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import SpaceBetween from "@/components/Containers/SpaceBetween";
import StrongText from "@/components/Text/StrongText";
import SaintsBook from "./components/SaintsBook";
import TodaysDate from "./components/TodaysDate";
import TodaysQuote from "./components/TodaysQuote";

const HomePage = () => {
  return (
    <MainContainer>
      <IndexBar sticky>
        <SpaceBetween>
          <StrongText>¡Bienvenido!</StrongText>
          <TodaysDate />
        </SpaceBetween>
      </IndexBar>
      <PaddingBox>
        <TodaysQuote />
      </PaddingBox>
      <PaddingBox>
        <SaintsBook />
      </PaddingBox>
    </MainContainer>
  );
};

export default HomePage;

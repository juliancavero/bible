import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import SaintsBook from "./components/SaintsBook";
import TodaysQuote from "./components/TodaysQuote";

const HomePage = () => {
  return (
    <MainContainer>
      {/* <IndexBar sticky>
        <SpaceBetween>
          <StrongText>¡Bienvenido!</StrongText>
          <TodaysDate />
        </SpaceBetween>
      </IndexBar> */}
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox>
            <TodaysQuote />
          </PaddingBox>
          <PaddingBox>
            <SaintsBook />
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default HomePage;

import IndexBar from "@/components/Containers/IndexBar";
import PaddingBox from "@/components/Containers/PaddingBox";
import FlexContainer from "@/components/Layout/FlexContainer";
import StrongText from "@/components/Text/StrongText";
import BibleBooksIndex from "./components/BibleBooksIndex";
import ContinueReading from "./components/ContinueReading";
import FavouriteBibleBooks from "./components/FavouriteBibleBooks";
import useBible from "./useBible";

const BiblePage = () => {
  const {
    oldBooks,
    newBooks,
    favChapters,
    onChapterSelect,
    onContinueReadingClick,
    continueReadingChapter,
  } = useBible();

  return (
    <FlexContainer className="w-full">
      <IndexBar sticky>
        <StrongText>Bible</StrongText>
      </IndexBar>

      <PaddingBox className="flex flex-col gap-3">
        {(favChapters.length > 0 || continueReadingChapter) && (
          <div className="bg-white dark:bg-primary-darkforeground grid grid-cols md:grid-cols-2 items-stretch gap-2 p-2 rounded-md">
            {favChapters && favChapters.length > 0 && (
              <FavouriteBibleBooks favouriteChapters={favChapters} />
            )}
            {continueReadingChapter && (
              <ContinueReading
                continueReadingChapter={continueReadingChapter}
                onContinueReadingClick={onContinueReadingClick}
              />
            )}
          </div>
        )}
        <BibleBooksIndex
          onChapterSelect={onChapterSelect}
          bibleBooks={{
            old: oldBooks,
            new: newBooks,
          }}
        />
      </PaddingBox>
    </FlexContainer>
  );
};

export default BiblePage;

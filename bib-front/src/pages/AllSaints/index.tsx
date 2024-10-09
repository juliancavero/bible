import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import Loader from "@/components/Icons/Loader";
import Star from "@/components/Icons/Star";
import Calendar from "@/components/Inputs/Calendar";
import BodyText from "@/components/Text/BodyText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import RenderContiguousDates from "./components/RenderContiguousDates";
import RenderResultSearchSaints from "./components/RenderResultSearchSaints";
import RenderSaint from "./components/RenderSaint";
import useAllSaints, { FilterOptions } from "./useAllSaints";

const AllSaintsPage = () => {
  const {
    date,
    setDate,
    favSaints,
    allSaints,
    setSearch,
    allSaintsParams,
    onSaintSelected,
    nearDatesSaints,
    openFilter,
    onFilterSelect,
  } = useAllSaints();
  return (
    <MainContainer>
      <IndexBar sticky text="Santoral" />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox>
            <Card>
              <AnimatedFilterBar
                openFilter={openFilter}
                onFilterSelect={onFilterSelect}
                search={allSaintsParams.search}
                date={date}
                setDate={setDate}
                setSearch={setSearch}
              />
            </Card>
          </PaddingBox>
          <PaddingBox className="flex flex-col gap-3">
            <Card>
              <PaddingBox multiplier={1} className="flex flex-col gap-2">
                {allSaints ? (
                  <RenderResultSearchSaints
                    saints={allSaints.data}
                    onSaintSelected={onSaintSelected}
                    search={allSaintsParams.search || ""}
                    searchDate={date}
                  />
                ) : nearDatesSaints ? (
                  <RenderContiguousDates
                    saints={nearDatesSaints}
                    onSaintSelected={onSaintSelected}
                  />
                ) : (
                  <PaddingBox className="flex justify-center">
                    <Loader size={60} />
                  </PaddingBox>
                )}
              </PaddingBox>
            </Card>
            <Card>
              <PaddingBox multiplier={1} className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                  <Star filled />
                  <BodyText className="text-xl">Favoritos</BodyText>
                </div>
                <PaddingBox multiplier={1} className="flex flex-col gap-2">
                  {favSaints?.map((saint, index) => {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer flex"
                        onClick={() => onSaintSelected(saint)}
                      >
                        <RenderSaint saint={saint} inverted={index % 2 !== 0} />
                      </div>
                    );
                  })}
                </PaddingBox>
              </PaddingBox>
            </Card>
          </PaddingBox>
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default AllSaintsPage;

type AnimatedFilterBarProps = {
  openFilter: FilterOptions | null;
  onFilterSelect: (filter: FilterOptions) => void;
  search: string | undefined;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  setSearch: (search: string) => void;
};

const AnimatedFilterBar = ({
  openFilter,
  onFilterSelect,
  search,
  date,
  setDate,
  setSearch,
}: AnimatedFilterBarProps) => {
  return (
    <div className="flex flex-row justify-around">
      <AnimatePresence initial={false}>
        <motion.div
          key={FilterOptions.SEARCH}
          initial={false}
          animate={{
            width: openFilter === FilterOptions.SEARCH ? "75%" : "25%",
          }}
          transition={{ duration: 0.5, type: "easeInOut" }}
          className={`flex items-center cursor-pointer gap-3`}
        >
          <Button
            onClick={() => onFilterSelect(FilterOptions.SEARCH)}
            variant="icon"
          >
            <MagnifyingGlassIcon
              className={`${
                !openFilter || openFilter == FilterOptions.SEARCH
                  ? "w-10 h-10"
                  : "w-5 h-5"
              }`}
            />
          </Button>
          <AnimatePresence mode="wait" initial={false}>
            {openFilter === FilterOptions.SEARCH && (
              <motion.div
                key={FilterOptions.SEARCH}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: "0%", opacity: 0 }}
                initial={{ width: "0%", opacity: 0 }}
                transition={{ duration: 0.5, type: "easeInOut" }}
              >
                <Input
                  autoFocus
                  placeholder="San/Santa..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          key={FilterOptions.DATE}
          animate={{
            width: openFilter === FilterOptions.DATE ? "75%" : "25%",
          }}
          transition={{ duration: 0.5, type: "easeInOut" }}
          className={`flex items-center justify-end cursor-pointer gap-3`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {openFilter === FilterOptions.DATE && (
              <motion.div
                key={FilterOptions.DATE}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: "0%", opacity: 0 }}
                initial={{ width: "0%", opacity: 0 }}
                transition={{ duration: 0.5, type: "easeInOut" }}
              >
                <Calendar date={date} setDate={setDate} autoOpen />
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            onClick={() => onFilterSelect(FilterOptions.DATE)}
            variant="icon"
          >
            <CalendarIcon
              className={`${
                !openFilter || openFilter == FilterOptions.DATE
                  ? "w-10 h-10"
                  : "w-5 h-5"
              }`}
            />
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

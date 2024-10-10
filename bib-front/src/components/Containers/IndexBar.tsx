import { motion } from "framer-motion";
import { HorizontalArrow } from "../Icons/Arrows";
import StrongText from "../Text/StrongText";

type IndexBarProps = {
  sticky?: boolean;
  text?: string;
  onClick?: () => void;
};

const IndexBar = ({
  sticky = false,
  text = "Biblia",
  onClick,
}: IndexBarProps) => {
  return (
    <div
      className={`w-full flex flex-row items-center p-3 gap-3 bg-background shadow-sm ${
        sticky && "sticky top-0 z-10"
      }`}
    >
      {onClick && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2, type: "easeInOut" }}
        >
          <HorizontalArrow onClick={onClick} withButton dir="left" />
        </motion.div>
      )}

      <StrongText>{text}</StrongText>
    </div>
  );
};

export default IndexBar;

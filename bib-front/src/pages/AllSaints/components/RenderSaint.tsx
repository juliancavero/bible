import BodyText from "@/components/Text/BodyText";
import StrongText from "@/components/Text/StrongText";
import { Saint } from "@/types/saints";
import { renderDate } from "@/utils/calendar";

type RenderSaintProps = {
  saint: Saint;
  inverted?: boolean;
};

const RenderSaint = ({ saint, inverted = false }: RenderSaintProps) => {
  const saintDate = new Date(
    new Date().getFullYear(),
    saint.month - 1,
    saint.day
  );
  return (
    <div
      className={`rounded-lg ${
        inverted ? "bg-background-alternate" : "bg-muted"
      }`}
    >
      {inverted ? (
        <div className="flex flex-row w-full items-center gap-3">
          <div className="w-5/6 flex flex-col gap-1 items-end">
            <StrongText>{saint.name}</StrongText>
            <BodyText>{renderDate(saintDate)}</BodyText>
          </div>
          <div className="w-1/6">
            <Image src={saint.image} inverted />
          </div>
        </div>
      ) : (
        <div className="flex flex-row w-full items-center gap-3">
          <div className="w-1/6">
            <Image src={saint.image} />
          </div>
          <div className="w-5/6 flex flex-col gap-1">
            <StrongText>{saint.name}</StrongText>
            <BodyText>{renderDate(saintDate)}</BodyText>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderSaint;

type ImageProps = {
  src: string | undefined;
  inverted?: boolean;
};

const Image = ({ src, inverted = false }: ImageProps) => {
  return (
    <img
      src={
        src ||
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
      }
      className={`${
        inverted ? "rounded-tr-lg rounded-br-lg" : "rounded-tl-lg rounded-bl-lg"
      } `}
    />
  );
};

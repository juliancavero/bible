import * as II from "@/components/Misc/Image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import useShare from "@/hooks/useShare";
import { Saint } from "@/types/saints";
import { renderDate } from "@/utils/calendar";
import { ShareIcon } from "@heroicons/react/24/outline";
import { DialogTitle } from "@radix-ui/react-dialog";

type ImageDetailsDialogProps = {
  saint: Saint;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ImageDetailsDialog = ({
  saint,
  open,
  setOpen,
}: ImageDetailsDialogProps) => {
  const saintDate = new Date(
    new Date().getFullYear(),
    saint.month - 1,
    saint.day
  );
  /* const defaultText = `El día ${renderDate(saintDate)} se celebra ${
    saint.name
  }. Aprende más sobre su significado en ${window.location.href}`;
  const [text, setText] = useState(defaultText); */
  const { shareImageWithText } = useShare();

  const onShare = async () => {
    if (saint.image) {
      await shareImageWithText(
        saint.image,
        `${renderDate(saintDate)} - ${saint.name}`
      );
    }
  };

  const isShareable = navigator.share !== undefined;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogHeader>
        <DialogTitle hidden>{saint.name}</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="w-screen h-dvh"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogDescription className="flex flex-col justify-center items-center gap-5">
          {saint.image && (
            <II.default
              src={saint.image}
              alt={"Image of " + saint.name}
              fit="contain"
            />
          )}
          {isShareable && (
            <div className="flex flex-col gap-2 w-full">
              <Button onClick={onShare} className="w-full flex flex-row gap-3">
                <ShareIcon className="w-6 h-6" />
                Compartir
              </Button>
            </div>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDetailsDialog;

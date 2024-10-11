import * as II from "@/components/Misc/Image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import useShare from "@/hooks/useShare";
import { Teaching } from "@/types/bible";
import { ShareIcon } from "@heroicons/react/24/outline";
import { DialogTitle } from "@radix-ui/react-dialog";

type ImageDetailsDialogProps = {
  teaching: Teaching;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ImageDetailsDialog = ({
  teaching,
  open,
  setOpen,
}: ImageDetailsDialogProps) => {
  /* const defaultText = `El día ${renderDate(saintDate)} se celebra ${
    saint.name
  }. Aprende más sobre su significado en ${window.location.href}`;
  const [text, setText] = useState(defaultText); */
  const { shareImageWithText } = useShare();

  const onShare = async () => {
    if (teaching.image) {
      await shareImageWithText(teaching.image, "");
    }
  };

  const isShareable = !!navigator.share;
  const bookTitle = `${teaching.book} ${teaching.chapter}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle hidden>{bookTitle}</DialogTitle>
      <DialogContent
        className="w-screen h-dvh"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogDescription className="flex flex-col justify-center items-center gap-5">
          {teaching.image && (
            <II.default
              src={teaching.image}
              alt={"Image of " + bookTitle}
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

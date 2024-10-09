import Image from "@/components/Misc/Image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Saint } from "@/types/saints";
import { renderDate } from "@/utils/calendar";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

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
  const defaultText = `El día ${renderDate(saintDate)} se celebra ${
    saint.name
  }. Aprende más sobre su significado en ${window.location.href}`;
  const [text, setText] = useState(defaultText);

  const onShare = async () => {
    if (navigator.share) {
      try {
        if (!saint.image) return;
        const imageBlob = await fetch(saint.image).then((res) => res.blob());
        await navigator.share({
          title: "Compartir",
          text: text,
          files: [new File([imageBlob], "saint.jpg", { type: "image/jpeg" })],
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle hidden>{saint.name}</DialogTitle>
      <DialogContent
        className="w-screen h-screen"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogDescription className="flex flex-col justify-center items-center gap-5">
          {saint.image && (
            <Image
              src={saint.image}
              alt={"Image of " + saint.name}
              fit="contain"
            />
          )}
          <div className="flex flex-col gap-2 w-full">
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={onShare} className="w-full">
              Compartir
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDetailsDialog;

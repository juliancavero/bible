import Image from "@/components/Misc/Image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

type ImageDetailsDialogProps = {
  src: string;
  alt?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ImageDetailsDialog = ({
  src,
  alt,
  open,
  setOpen,
}: ImageDetailsDialogProps) => {
  const [text] = useState("");

  const onShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Compartir",
          text,
          url: src,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle hidden>{alt}</DialogTitle>
      <DialogContent className="w-screen h-screen">
        <DialogDescription className="flex flex-col justify-center items-center">
          <Image src={src} alt={alt} fit="contain" />
          <Button onClick={onShare} className="w-full">
            Compartir
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDetailsDialog;

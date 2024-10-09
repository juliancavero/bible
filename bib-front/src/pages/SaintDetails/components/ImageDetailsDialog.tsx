import * as II from "@/components/Misc/Image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Saint } from "@/types/saints";
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
  /* const saintDate = new Date(
    new Date().getFullYear(),
    saint.month - 1,
    saint.day
  ); */
  /* const defaultText = `El día ${renderDate(saintDate)} se celebra ${
    saint.name
  }. Aprende más sobre su significado en ${window.location.href}`;
  const [text, setText] = useState(defaultText); */

  const onShare = async () => {
    if (navigator.share) {
      try {
        if (!saint.image) return;
        const imageBlob = await fetch(saint.image).then((res) => res.blob());
        const imageWithText = await addTextToImageBlob(
          imageBlob,
          "Santo del día"
        );
        await navigator.share({
          /* title: "Compartir",
          text: text, */
          files: [
            new File([imageWithText], "saint.jpg", { type: "image/jpeg" }),
          ],
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
          <div className="flex flex-col gap-2 w-full">
            {/* <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="font-semibold"
            /> */}
            <Button onClick={onShare} className="w-full flex flex-row gap-3">
              <ShareIcon className="w-6 h-6" />
              Compartir
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDetailsDialog;

const addTextToImageBlob = async (
  imageBlob: Blob,
  text: string
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    // Crear una imagen a partir del Blob
    const img = new Image();
    img.src = URL.createObjectURL(imageBlob);

    img.onload = () => {
      // Crear un canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("No se pudo obtener el contexto del canvas."));
        return;
      }
      // Establecer el tamaño del canvas según el tamaño de la imagen
      canvas.width = img.width;
      canvas.height = img.height;

      // Dibujar la imagen en el canvas
      ctx.drawImage(img, 0, 0);

      // Configurar el estilo del texto
      ctx.font = "30px Arial"; // Puedes cambiar la fuente y el tamaño
      ctx.fillStyle = "white"; // Color del texto
      ctx.textAlign = "right"; // Alinear a la derecha
      ctx.textBaseline = "bottom"; // Baseline en la parte inferior

      // Añadir el texto en la parte inferior derecha
      const padding = 10; // Espacio desde el borde
      ctx.fillText(text, img.width - padding, img.height - padding);

      // Convertir el canvas a Blob
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        }
      }, "image/jpeg");
    };
  });
};

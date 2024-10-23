const useShare = () => {
  const shareImage = async (url: string, description: string = "image") => {
    if (navigator.share) {
      try {
        const imageBlob = await fetch(url).then((res) => res.blob());
        await navigator.share({
          files: [
            new File([imageBlob], `${description}`, { type: "image/jpeg" }),
          ],
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      window.alert("Tu navegador no soporta la API de Web Share.");
    }
  };

  const shareImageWithText = async (
    url: string,
    text: string,
    description: string = "image"
  ) => {
    if (navigator.share) {
      try {
        const imageBlob = await fetch(url).then((res) => res.blob());
        const imageWithText = await addTextToImageBlob(imageBlob, text);
        await navigator.share({
          files: [
            new File([imageWithText], `${description}`, { type: "image/jpeg" }),
          ],
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      window.alert("Tu navegador no soporta la API de Web Share.");
    }
  };

  const shareLink = async (url: string, title: string, text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      window.alert("Tu navegador no soporta la API de Web Share.");
    }
  };

  return {
    shareImage,
    shareImageWithText,
    shareLink,
  };
};

export default useShare;

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

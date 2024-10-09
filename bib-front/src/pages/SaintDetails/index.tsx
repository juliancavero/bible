import AnimatedLayout from "@/components/Animated/AnimatedLayout";
import Card from "@/components/Containers/Card";
import IndexBar from "@/components/Containers/IndexBar";
import MainContainer from "@/components/Containers/MainContainer";
import PaddingBox from "@/components/Containers/PaddingBox";
import Star from "@/components/Icons/Star";
import Image from "@/components/Misc/Image";
import Markdown from "@/components/Text/Markdown";
import StrongText from "@/components/Text/StrongText";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ImageDetailsDialog from "./components/ImageDetailsDialog";
import useSaintDetails from "./useSaintDetails";

const SaintDetailsPage = () => {
  const {
    data,
    onBack,
    isError,
    isLoading,
    imageOpen,
    todaysDate,
    isFavourite,
    setImageOpen,
    toggleFavourite,
  } = useSaintDetails();
  console.log(data);
  return (
    <MainContainer>
      <IndexBar sticky text={data ? data.name : "Santoral"} onClick={onBack} />
      <AnimatedLayout>
        <MainContainer>
          <PaddingBox>
            <PaddingBox multiplier={2}>
              <h3 className="text-2xl text-right font-bold capitalize">
                {todaysDate.toLocaleDateString("es-ES", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </h3>
            </PaddingBox>
            <Card>
              {isLoading && <Loading />}
              {isError && <Error />}
              {data ? (
                <div key={data.id} className="px-2">
                  <div className="flex flex-row items-center justify-between md:mb-3">
                    <StrongText className="italic capitalize">
                      {data.name}
                    </StrongText>
                    <div>
                      <Button variant={"link"} onClick={toggleFavourite}>
                        <Star filled={isFavourite} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:block">
                    {data.image && (
                      <Image
                        src={data.image}
                        alt={data.name}
                        className="float-none md:float-right w-4/5 md:w-1/3 md:max-w-96"
                        onClick={() => setImageOpen(true)}
                      />
                    )}
                    <Markdown indent={false} children={data.text} />
                  </div>
                  {data && (
                    <ImageDetailsDialog
                      open={imageOpen}
                      setOpen={setImageOpen}
                      saint={data}
                    />
                  )}
                </div>
              ) : (
                <PaddingBox>
                  <h1 className="text-xl">
                    No se encontró información para este día.
                  </h1>
                </PaddingBox>
              )}
            </Card>
          </PaddingBox>
          {/* <ImageDetailsDialog
            open={true}
            setOpen={setImageOpen}
            saint={{
              id: 28,
              day: 9,
              month: 10,
              name: "San Dionisio de París",
              image:
                "https://res.cloudinary.com/dkequ9kzt/image/upload/v1728386437/q5s1ewug2anxznneoxdg.jpg",
              text: '### 9 de Octubre: San Dionisio de París, el Santo de la Perseverancia\r\n\r\n¿Tienes algún amigo o familiar que se llame Dionisio? Este nombre, aunque no es muy común, tiene un significado profundo y una historia fascinante que hoy celebramos. La fiesta de **San Dionisio** puede ser una excelente oportunidad para reflexionar sobre la perseverancia, la fortaleza ante las adversidades y la capacidad de liderazgo. Todos, en algún momento de nuestras vidas, enfrentamos desafíos y situaciones difíciles, y este santo nos recuerda el poder de mantenernos firmes en la fe y nuestras convicciones. San Dionisio es especialmente un referente para quienes llevan su nombre, inspirándolos a vivir con valentía y esperanza.\r\n\r\n#### ¿Quién fue San Dionisio de París?\r\n\r\n**San Dionisio**, también conocido como San Denís, fue el primer obispo de París y uno de los patronos más importantes de la ciudad. Vivió en el siglo III y fue enviado a la región de la Galia (hoy Francia) para difundir el cristianismo. Su labor evangelizadora en un contexto lleno de paganismo y persecución fue extraordinaria.\r\n\r\nLa historia de San Dionisio está marcada por la perseverancia y el martirio. Se dice que fue decapitado en la colina de Montmartre junto con dos compañeros, Rustico y Eleuterio, por negarse a renunciar a su fe cristiana. Una de las leyendas más fascinantes de su vida cuenta que, tras ser decapitado, recogió su cabeza y caminó varios kilómetros, llevando consigo su testimonio de fe.\r\n\r\n#### Su importancia en la Iglesia y en la cultura\r\n\r\nSan Dionisio no solo es importante para la Iglesia Católica por su rol evangelizador, sino que también es una figura muy significativa en la historia cultural de Francia. La basílica de Saint-Denis, donde se dice que fue enterrado, se convirtió en lugar de peregrinación y, más adelante, en panteón de los reyes de Francia. Esto consolidó su legado como una figura clave tanto en el ámbito religioso como en el cultural.\r\n\r\nLos nombres "Denís" y "Dionisio" se han convertido en símbolos de tenacidad y coraje en varias culturas, y su historia ha inspirado a muchos a lo largo de los siglos.\r\n\r\n#### ¿Qué podemos aprender hoy de San Dionisio?\r\n\r\nEn un mundo en el que muchas veces enfrentamos presiones externas, como las críticas, el rechazo o el desánimo, la figura de **San Dionisio** nos enseña que la fortaleza interior es clave. Nos recuerda que, aunque las circunstancias sean adversas, podemos encontrar en la fe y en nuestras convicciones un refugio y una fuente de poder. Aquellos que hoy se sientan desafiados en su vida personal o laboral, pueden mirar a San Dionisio como un modelo de perseverancia y de resistencia pacífica.\r\n\r\nSi conoces a alguien que lleva el nombre de Dionisio o Denís, ¡hoy es un buen día para felicitarle y recordarle el poder y la herencia de su nombre!\r\n\r\n#### Oración a San Dionisio\r\n\r\nOh glorioso **San Dionisio**, tú que fuiste enviado a predicar la palabra de Dios en tierras lejanas, enfrentando la persecución y el martirio con valentía inquebrantable, te pedimos hoy que intercedas por nosotros.  \r\nDanos la fortaleza de mantenernos firmes en nuestra fe, aun en medio de las pruebas, y enséñanos a caminar siempre en la verdad y el amor.  \r\nQue tu ejemplo de perseverancia inspire nuestros corazones y que tu protección nos acompañe en cada desafío.  \r\nAmén.',
              createdAt: "2024-09-25T11:39:55.000Z",
              isMain: true,
            }}
          /> */}
        </MainContainer>
      </AnimatedLayout>
    </MainContainer>
  );
};

export default SaintDetailsPage;

const Loading = () => {
  return (
    <PaddingBox className="flex flex-col gap-3">
      <Skeleton className="w-full h-8" />
      <div className="flex justify-center">
        <Skeleton className="w-3/5 h-48" />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
      </div>
    </PaddingBox>
  );
};

const Error = () => {
  return (
    <PaddingBox>
      <StrongText className="text-center text-amber-300">
        Hubo un error al cargar este santo. Inténtalo de nuevo más tarde.
      </StrongText>
    </PaddingBox>
  );
};

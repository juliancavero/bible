type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  type?: "home" | "details";
};

const Image = ({ src, alt, type = "home", className }: ImageProps) => {
  const classes = {
    home: "ml-2 w-5/12 md:w-1/3 max-w-96 my-2 rounded-lg",
    details: "m-2 w-4/5 md:w-1/3 md:max-w-96 my-2 rounded-lg",
  };

  return (
    <img className={`${classes[type]} ${className}`} src={src} alt={alt} />
  );
};

export default Image;

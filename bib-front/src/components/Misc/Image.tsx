type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  fit?: "contain" | "cover";
  onClick?: () => void;
};

const Image = ({ src, alt, fit = "cover", onClick, className }: ImageProps) => {
  return (
    <img
      className={`h-auto m-2 rounded-lg object-${fit} ${className}`}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default Image;

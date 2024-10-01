type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
  return <img className={`w-36 h-auto ${className}`} src={src} alt={alt} />;
};

export default Image;

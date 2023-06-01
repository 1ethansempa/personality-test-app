import React from "react";
import { InputProps } from "../../../common/types";

interface LazyLoadedImageProps extends InputProps {
  src: string;
  alt: string;
}

function LazyLoadedImage({ src, alt, className }: LazyLoadedImageProps) {
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}

export default LazyLoadedImage;

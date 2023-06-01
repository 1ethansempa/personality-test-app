import React from "react";

interface LazyLoadedImageProps {
  src: string;
  alt: string;
}

function LazyLoadedImage({ src, alt }: LazyLoadedImageProps) {
  return <img src={src} alt={alt} loading="lazy" />;
}

export default LazyLoadedImage;

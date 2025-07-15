"use client";

import Image from "next/image";
import React from "react";

interface CoverImageProps {
  src?: string;
  alt?: string;
  height?: string; // Tailwind height classes
  rounded?: boolean;
  shadow?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  objectPosition?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
  src = "/assets/images/cover.jpg",
  alt = "Cover Image",
  height = "h-60 sm:h-80 md:h-96",
  rounded = true,
  shadow = true,
  priority = true,
  quality = 100,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw",
  objectPosition = "object-[80%_10%]",
}) => {
  return (
    <div
      className={`relative w-full ${height} overflow-hidden ${
        rounded ? "rounded-lg" : ""
      } ${shadow ? "shadow-md" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={`object-cover ${objectPosition}`}
        placeholder="empty" // Replace with "blur" and add blurDataURL if needed
      />
    </div>
  );
};

export default CoverImage;

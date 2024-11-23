"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { ImageViewer } from "./ImageViewer";

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (_: string, imageIndex: number) => {
    setSelectedImage(imageIndex);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <ScrollArea className="mt-4 w-full sm:max-w-96 whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 py-4">
          {images.map((image, imageIndex) => (
            <button
              key={imageIndex}
              onClick={() => handleImageClick(image, imageIndex)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            >
              <Image
                src={image}
                alt={`Project image ${imageIndex + 1}`}
                width={150}
                height={90}
                className="w-full rounded-md hover:opacity-80 transition-opacity"
              />
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {selectedImage !== null && (
        <ImageViewer
          url={images[selectedImage]}
          index={selectedImage}
          total={images.length}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
};

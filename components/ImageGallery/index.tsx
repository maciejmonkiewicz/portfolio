"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState, useCallback } from "react";
import { ImageViewer } from "./ImageViewer";

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = useCallback((imageIndex: number) => {
    setSelectedImage(imageIndex);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImages = useCallback((direction: "next" | "previous") => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      if (direction === "next") {
        return (prev + 1) % images.length;
      }
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  return (
    <>
      <ScrollArea className="mt-4 w-full sm:max-w-96 whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 py-4">
          {images.map((image, imageIndex) => (
            <button
              key={imageIndex}
              onClick={() => handleImageClick(imageIndex)}
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
          onNext={() => navigateImages("next")}
          onPrevious={() => navigateImages("previous")}
        />
      )}
    </>
  );
};

"use client";

import { useState, useCallback, useEffect } from "react";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import Image from "next/image";
import { CloseButton } from "./CloseButton";
import { NavigationControls } from "./NavigationControls";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { toast } from "sonner";

interface ImageViewerProps {
  url: string;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ZOOM_LEVELS = [0.5, 1, 1.5, 2];

export const ImageViewer = ({
  url,
  index,
  total,
  onClose,
  onNext,
  onPrevious,
}: ImageViewerProps) => {
  const [zoomIndex, setZoomIndex] = useState(1);
  const zoom = ZOOM_LEVELS[zoomIndex];

  const handleTouchGesture = useSwipeGesture(onPrevious, onNext);

  const handleZoomIn = useCallback(() => {
    setZoomIndex((prev) => Math.min(prev + 1, ZOOM_LEVELS.length - 1));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomIndex(1);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrevious();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    onClose,
    onNext,
    onPrevious,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom,
  ]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] w-screen h-screen"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
        <div
          className="absolute top-4 left-4 z-50 flex gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-black/50 hover:bg-black/70"
            onClick={handleZoomOut}
            disabled={zoomIndex === 0}
          >
            <ZoomOut className="h-5 w-5" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <span className="text-white bg-black/50 px-3 py-2 rounded-md text-sm font-medium min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-black/50 hover:bg-black/70"
            onClick={handleZoomIn}
            disabled={zoomIndex === ZOOM_LEVELS.length - 1}
          >
            <ZoomIn className="h-5 w-5" />
            <span className="sr-only">Zoom in</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-black/50 hover:bg-black/70"
            onClick={handleResetZoom}
            title="Reset zoom (0)"
          >
            <RotateCw className="h-5 w-5" />
            <span className="sr-only">Reset zoom</span>
          </Button>
        </div>

        <CloseButton onClose={onClose} />

        <div
          className="relative flex items-center justify-center overflow-hidden transition-all duration-300 w-full h-full"
          {...(zoom === 1 ? handleTouchGesture : {})}
        >
          <div
            className="relative"
            style={{
              transform: `scale(${zoom})`,
              transition: "transform 0.2s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={url}
              alt={`Project image ${index + 1}`}
              width={2000}
              height={1600}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain"
              onClick={(e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (Math.abs(x - centerX) < 50 && Math.abs(y - centerY) < 50) {
                  handleZoomIn();
                }
              }}
            />
          </div>
        </div>

        <NavigationControls
          currentIndex={index}
          total={total}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </div>
    </div>
  );
};

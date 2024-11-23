import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import Image from "next/image";
import { CloseButton } from "./CloseButton";
import { NavigationControls } from "./NavigationControls";

interface ImageViewerProps {
  url: string;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ImageViewer = ({
  url,
  index,
  total,
  onClose,
  onNext,
  onPrevious,
}: ImageViewerProps) => {
  const handleTouchGesture = useSwipeGesture(onPrevious, onNext);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] w-screen h-screen"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={onClose} />
        <div
          className="relative w-full h-full flex items-center justify-center"
          {...handleTouchGesture}
        >
          <Image
            src={url}
            alt={`Project image ${index + 1}`}
            width={1000}
            height={800}
            className="max-h-[calc(100vh-120px)] w-auto object-contain"
          />
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

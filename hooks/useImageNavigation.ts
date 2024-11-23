import { useCallback } from "react";

interface UseImageNavigationProps {
  images: string[];
  currentIndex: number;
}

export const useImageNavigation = ({
  images,
  currentIndex,
}: UseImageNavigationProps) => {
  const handlePrevious = useCallback(() => {
    return (currentIndex - 1 + images.length) % images.length;
  }, [currentIndex, images.length]);

  const handleNext = useCallback(() => {
    return (currentIndex + 1) % images.length;
  }, [currentIndex, images.length]);

  return {
    handlePrevious,
    handleNext,
  };
};

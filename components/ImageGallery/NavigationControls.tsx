import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";

interface NavigationControlsProps {
  currentIndex: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
}

const NavigationControlsComponent = ({
  currentIndex,
  total,
  onNext,
  onPrevious,
}: NavigationControlsProps) => (
  <div className="flex items-center justify-center space-x-4 mt-4" onClick={(e) => e.stopPropagation()}>
    <Button
      variant="ghost"
      size="icon"
      className="text-white"
      onClick={(e) => {
        e.stopPropagation();
        onPrevious();
      }}
    >
      <ChevronLeft className="h-6 w-6" />
      <span className="sr-only">Previous image</span>
    </Button>
    <div className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
      {currentIndex + 1} / {total}
    </div>
    <Button
      variant="ghost"
      size="icon"
      className="text-white"
      onClick={(e) => {
        e.stopPropagation();
        onNext();
      }}
    >
      <ChevronRight className="h-6 w-6" />
      <span className="sr-only">Next image</span>
    </Button>
  </div>
);

NavigationControlsComponent.displayName = "NavigationControls";

export const NavigationControls = memo(NavigationControlsComponent);

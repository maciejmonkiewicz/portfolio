import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { memo } from "react";

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButtonComponent = ({ onClose }: CloseButtonProps) => (
  <Button
    variant="ghost"
    size="icon"
    className="absolute top-4 right-4 text-white z-50"
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
  >
    <X className="h-6 w-6" />
    <span className="sr-only">Close</span>
  </Button>
);

CloseButtonComponent.displayName = "CloseButton";

export const CloseButton = memo(CloseButtonComponent);

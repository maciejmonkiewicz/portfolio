import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: CloseButtonProps) => (
  <Button
    variant="ghost"
    size="icon"
    className="absolute top-4 right-4 text-white z-50"
    onClick={onClose}
  >
    <X className="h-6 w-6" />
    <span className="sr-only">Close</span>
  </Button>
);

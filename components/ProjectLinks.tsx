import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Code2, Eye, HeartCrack, Unplug } from "lucide-react";

interface ProjectLinksProps {
  repoUrl?: string;
  demoUrl?: string;
}

export const ProjectLinks = ({ repoUrl, demoUrl }: ProjectLinksProps) => (
  <div className="flex gap-2 items-center w-full justify-between">
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="default"
            className={cn(
              "mt-2 border dark:border-neutral-500 dark:text-neutral-300 text-neutral-600 border-neutral-300 w-full",
              !repoUrl && "blur-sm"
            )}
            onClick={() => repoUrl && window.open(repoUrl, "_blank")}
          >
            <Code2 className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </TooltipTrigger>
        {!repoUrl && (
          <TooltipContent>
            <p className="flex gap-1 items-center">
              Sorry, this project is not public{" "}
              <HeartCrack className="h-4 w-4 inline text-red-400" />
            </p>
          </TooltipContent>
        )}
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="default"
            className={cn(
              "mt-2 border dark:border-neutral-500 dark:text-neutral-300 text-neutral-600 border-neutral-300 w-full",
              !demoUrl && "blur-sm"
            )}
            onClick={() => demoUrl && window.open(demoUrl, "_blank")}
          >
            <Eye className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </TooltipTrigger>
        {!demoUrl && (
          <TooltipContent>
            <p className="flex gap-1 items-center">
              Sorry, this project has no live demo{" "}
              <Unplug className="h-4 w-4 inline text-orange-900 dark:text-orange-600" />
            </p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  </div>
);

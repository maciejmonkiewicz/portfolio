import { Button } from "@/components/ui/button";
import { FileCode } from "lucide-react";

interface AboutProps {
  about: string;
  resumePath: string;
}

export const About = ({ about, resumePath }: AboutProps) => (
  <section className="my-9 text-sm">
    <h3 className="mb-1 text-neutral-900 dark:text-neutral-100">About</h3>
    <div className="text-neutral-600 dark:text-neutral-300">
      <p>{about}</p>
    </div>
    <Button
      variant="secondary"
      className="mt-4 border dark:border-neutral-500 dark:text-neutral-300 text-neutral-600 border-neutral-300 w-full"
      onClick={() => window.open(resumePath, "_blank")}
    >
      <FileCode className="mr-2 size-4" /> See my resume
    </Button>
  </section>
);

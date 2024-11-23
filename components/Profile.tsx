import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
interface ProfileProps {
  avatar: string;
  name: string;
  jobTitle: string;
  website?: string;
}

export const Profile = ({ avatar, name, jobTitle, website }: ProfileProps) => (
  <section className="flex items-center">
    <div className="w-fit h-fit relative">
      <Image
        alt="Author"
        src={avatar}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
    </div>
    <div className="ml-4">
      <h1 className="mb-0.5 text-xl text-neutral-900 dark:text-neutral-100">
        {name}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm">
        {jobTitle}
      </p>
      {website && (
        <span className="text-sm text-neutral-400 dark:text-neutral-400">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {website.replace(/(^\w+:|^)\/\//, "").replace("www.", "")}
          </a>
        </span>
      )}
      <ThemeToggle />
    </div>
  </section>
);

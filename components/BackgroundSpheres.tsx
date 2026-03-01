import Image from "next/image";
import { memo } from "react";

const SPHERES = [
  {
    src: "/spheres/1.png",
    className: "top-[10%] md:top-[-5%] left-[-5%] w-[50%] max-w-[300px]",
  },
  {
    src: "/spheres/2.png",
    className: "bottom-[10%] left-[5%] w-[35%] max-w-[250px]",
  },
  {
    src: "/spheres/3.png",
    className: "top-[40%] right-[15%] w-[30%] max-w-[200px]",
  },
] as const;

const BackgroundSpheresComponent = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {SPHERES.map((sphere, index) => (
      <Image
        key={index}
        src={sphere.src}
        alt={`Sphere ${index + 1}`}
        width={300}
        height={300}
        className={`absolute ${sphere.className} h-auto opacity-60 sm:opacity-80 dark:opacity-30 dark:sm:opacity-50`}
      />
    ))}
  </div>
);

BackgroundSpheresComponent.displayName = "BackgroundSpheres";

export const BackgroundSpheres = memo(BackgroundSpheresComponent);

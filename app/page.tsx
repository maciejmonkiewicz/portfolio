"use client";

import Image from "next/image";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
  HeartCrack,
  Unplug,
  FileCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ContentProps = Content;

function Content({ title, items }: ContentProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    itemIndex: number;
    imageIndex: number;
  } | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleImageClick = (
    image: string,
    itemIndex: number,
    imageIndex: number
  ) => {
    setSelectedImage({ url: image, itemIndex, imageIndex });
  };

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const handlePrevious = () => {
    if (selectedImage) {
      const currentItem = items[selectedImage.itemIndex];
      if (currentItem && currentItem.images) {
        const newImageIndex =
          (selectedImage.imageIndex - 1 + currentItem.images.length) %
          currentItem.images.length;
        setSelectedImage({
          ...selectedImage,
          imageIndex: newImageIndex,
          url: currentItem.images[newImageIndex],
        });
      }
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentItem = items[selectedImage.itemIndex];
      if (currentItem && currentItem.images) {
        const newImageIndex =
          (selectedImage.imageIndex + 1) % currentItem.images.length;
        setSelectedImage({
          ...selectedImage,
          imageIndex: newImageIndex,
          url: currentItem.images[newImageIndex],
        });
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        if (event.key === "ArrowLeft") {
          handlePrevious();
        } else if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "Escape") {
          handleClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, handleClose]);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, itemIndex) => (
          <div
            className="flex flex-col sm:flex-row gap-2 sm:gap-0"
            key={itemIndex}
          >
            <div className="mr-8 max-w-[100px] w-full text-neutral-400 dark:text-neutral-400">
              {item.date}
            </div>
            <div className="flex flex-col flex-1">
              <h4>{item.title}</h4>
              <p className="text-neutral-600 dark:text-gray-400">
                {item.subTitle}
              </p>
              {item.description && (
                <p className="text-neutral-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              )}
              {item.images && item.images.length > 0 && (
                <ScrollArea className="mt-4 w-full sm:max-w-96 whitespace-nowrap rounded-md">
                  <div className="flex w-max space-x-4 py-4">
                    {item.images.map((image, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() =>
                          handleImageClick(image, itemIndex, imageIndex)
                        }
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                      >
                        <Image
                          src={image}
                          alt={`Project ${item.title} - Image ${
                            imageIndex + 1
                          }`}
                          width={150}
                          height={90}
                          className="w-full rounded-md hover:opacity-80 transition-opacity"
                        />
                      </button>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" className="mt-2" />
                </ScrollArea>
              )}

              {item.isProject && (
                <div className="flex gap-2 items-center w-full justify-between">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="secondary"
                          size="default"
                          className={cn(
                            "mt-2 border dark:border-neutral-500 dark:text-neutral-300 text-neutral-600 border-neutral-300 w-full",
                            !item.repoUrl && "blur-sm"
                          )}
                          onClick={() =>
                            item.repoUrl && window.open(item.repoUrl, "_blank")
                          }
                        >
                          <Code2 className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </TooltipTrigger>
                      {!item.repoUrl && (
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
                            !item.demoUrl && "blur-sm "
                          )}
                          onClick={() =>
                            item.demoUrl && window.open(item.demoUrl, "_blank")
                          }
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </TooltipTrigger>
                      {!item.demoUrl && (
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
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] w-screen h-screen"
          onClick={handleOutsideClick}
        >
          <div
            className="relative w-full h-full flex flex-col items-center justify-center px-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white z-50"
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={`Project image ${selectedImage.imageIndex + 1}`}
                width={1000}
                height={800}
                className="max-h-[calc(100vh-120px)] w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              <div className="text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {selectedImage.imageIndex + 1} /{" "}
                {items[selectedImage.itemIndex]?.images?.length || 1}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <Image
          src="/spheres/1.png"
          alt="Sphere 1"
          width={300}
          height={300}
          className="absolute top-[10%] md:top-[-5%] left-[-5%] w-[50%] h-auto max-w-[300px] opacity-60 sm:opacity-80 dark:opacity-30 dark:sm:opacity-50"
        />
        <Image
          src="/spheres/2.png"
          alt="Sphere 2"
          width={250}
          height={250}
          className="absolute bottom-[10%] left-[5%] w-[35%] h-auto max-w-[250px] opacity-60 sm:opacity-80 dark:opacity-30 dark:sm:opacity-50"
        />
        <Image
          src="/spheres/3.png"
          alt="Sphere 3"
          width={200}
          height={200}
          className="absolute top-[40%] right-[15%] w-[30%] h-auto max-w-[200px] opacity-60 sm:opacity-80 dark:opacity-30 dark:sm:opacity-50"
        />
      </div>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex items-center">
          <Image
            alt="Author"
            src={generalData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-neutral-900 dark:text-neutral-100">
              {generalData.name}
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-neutral-400 dark:text-neutral-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </span>
            ) : null}
            <ThemeToggle />
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-neutral-900 dark:text-neutral-100">About</h3>
          <div className="text-neutral-600 dark:text-neutral-300">
            <p>{generalData.about}</p>
          </div>
          <Button
            variant="secondary"
            size="default"
            className={cn(
              "mt-4 border dark:border-neutral-500 dark:text-neutral-300 text-neutral-600 border-neutral-300 w-full"
            )}
            onClick={() => {
              window.open(generalData.resumePath, "_blank");
            }}
          >
            <FileCode className="mr-2 size-4" /> See my resume
          </Button>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <section className="my-14 text-sm">
          <h3 className="mb-6 text-neutral-900 dark:text-neutral-100">
            Contact
          </h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-neutral-400 dark:text-neutral-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-neutral-900 dark:text-neutral-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-neutral-900 dark:text-neutral-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

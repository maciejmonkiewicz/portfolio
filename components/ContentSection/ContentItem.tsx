"use client";

import { ImageGallery } from "../ImageGallery";
import { ProjectLinks } from "../ProjectLinks";

export interface ContentItemProps {
  date: string;
  title: string;
  subTitle: string;
  description?: string;
  images?: string[];
  isProject?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  onImageClick?: (image: string, imageIndex: number) => void;
}

export const ContentItem = ({
  date,
  title,
  subTitle,
  description,
  images,
  isProject,
  repoUrl,
  demoUrl,
  onImageClick,
}: ContentItemProps) => (
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
    <div className="mr-8 max-w-[100px] w-full text-neutral-400 dark:text-neutral-400">
      {date}
    </div>
    <div className="flex flex-col flex-1">
      <h4>{title}</h4>
      <p className="text-neutral-600 dark:text-gray-400">{subTitle}</p>
      {description && (
        <p className="text-neutral-600 dark:text-gray-400 mt-2">
          {description}
        </p>
      )}
      {images && images.length > 0 && <ImageGallery images={images} />}
      {isProject && <ProjectLinks repoUrl={repoUrl} demoUrl={demoUrl} />}
    </div>
  </div>
);

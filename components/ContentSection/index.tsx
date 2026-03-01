import { ContentItem } from "./ContentItem";
import { type ContentItem as ContentItemType } from "@/types/content";

interface ContentSectionProps {
  title: string;
  items: ContentItemType[];
}

export const ContentSection = ({ title, items }: ContentSectionProps) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

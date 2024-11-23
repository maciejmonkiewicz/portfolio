import { ContentItem, ContentItemProps } from "./ContentItem";

interface ContentSectionProps {
  title: string;
  items: ContentItemProps[];
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

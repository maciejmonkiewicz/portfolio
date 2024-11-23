"use client";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ContentSection } from "@/components/ContentSection";

import { Profile } from "@/components/Profile";
import { contentData } from "@/data/content";
import { generalData } from "@/data/general";

export default function Home() {
  return (
    <>
      <Profile {...generalData} />
      <About about={generalData.about} resumePath={generalData.resumePath} />
      {contentData.map((content, index) => (
        <ContentSection key={index} {...content} />
      ))}
      <Contact contacts={generalData.contacts} />
    </>
  );
}

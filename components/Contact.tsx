import { ExternalLinkIcon } from "@/components/ui/external-link-icon";

interface ContactProps {
  contacts: {
    label: string;
    value: string;
    href: string;
  }[];
}

export const Contact = ({ contacts }: ContactProps) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 text-neutral-900 dark:text-neutral-100">Contact</h3>
      <div className="flex flex-col gap-6">
        {contacts.map((contact, index) => (
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
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

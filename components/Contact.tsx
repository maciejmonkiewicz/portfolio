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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                    className="fill-current text-neutral-900 dark:text-neutral-100"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

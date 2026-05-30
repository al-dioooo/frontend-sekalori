import { IconChevronDown } from "@tabler/icons-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index === 0}
          className="motion-reveal group rounded-[32px] border border-[#ecfdf5] bg-white p-px transition duration-300 hover:-translate-y-1 hover:border-[#bfe7cf] hover:shadow-[0_18px_40px_-28px_rgba(15,82,56,0.4)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-sans text-base leading-7 text-[#176034] transition hover:text-[#0f5238] sm:text-lg">
            <span>{item.question}</span>
            <span className="flex size-6 shrink-0 items-center justify-center text-[#176034] transition group-open:rotate-180">
              <IconChevronDown
                className="h-4 w-4"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </summary>
          <div className="border-t border-[#ecfdf5] px-6 pb-6 pt-4">
            <p className="font-sans text-base leading-6 text-[#404940]">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

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
          className="group rounded-[32px] border border-[#ecfdf5] bg-white p-px"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-sans text-base leading-7 text-[#176034] sm:text-lg">
            <span>{item.question}</span>
            <span className="flex size-6 shrink-0 items-center justify-center text-[#176034] transition group-open:rotate-180">
              <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                <path
                  d="m3 6 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
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

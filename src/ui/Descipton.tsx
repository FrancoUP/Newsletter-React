import { ReactNode } from "react";

export interface DescriptionProps {
  children: ReactNode;
}

export function Descipton({ children }: DescriptionProps) {
  return (
    <div className="lg:h-[593px] flex flex-col gap-6 p-[7vw] lg:pl-0 lg:pt-7 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
      <h1 className="font-roboto font-bold text-[40px] not-italic text-[#242742] lg:text-[56px]">
        Stay Updated!
      </h1>

      <h2 className="font-roboto font-normal text-base text-[#242742] mb-[30px] lg:mb-0">
        Join 60,000+ product managers receiving monthly updates on:
      </h2>

      {children}
    </div>
  );
}

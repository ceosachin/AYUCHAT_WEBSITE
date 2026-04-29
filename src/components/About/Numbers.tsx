// components/about/Numbers.tsx

import React, { useEffect, useRef, useState } from "react";

/* Count Animation Hook */
const useCountUp = (end: number, start: boolean, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return value;
};

const Numbers: React.FC = () => {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const businesses = useCountUp(1000, start);
  const messages = useCountUp(500000, start);
  const delivery = useCountUp(96, start);
  const states = useCountUp(18, start);

  return (
    <section className="py-20 px-6 bg-[#f6f8f7] text-center">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-semibold">
          BY THE NUMBERS
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mt-4 font-['Bricolage_Grotesque'] leading-tight">
          Numbers That{" "}
          <span className="text-[#0B6B50]">Tell the Story</span>
        </h2>

        {/* BOX CONTAINER */}
        <div
          ref={ref}
          className="mt-12 border border-gray-200 rounded-2xl overflow-hidden bg-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">

            {/* ITEM */}
            <StatItem
              value={`${businesses.toLocaleString()}+`}
              label="Businesses Trusted AyuChat"
              borderRight
            />

            <StatItem
              value={`${Math.floor(messages / 1000)}K+`}
              label="Messages Delivered Daily"
              borderRight
            />

            <StatItem
              value={`${delivery}%`}
              label="Average Delivery Rate"
              borderRight
            />

            <StatItem
              value={`${states}+`}
              label="States Across India Served"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Numbers;

/* Stat Item Component */

type StatItemProps = {
  value: string;
  label: string;
  borderRight?: boolean;
};

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  borderRight,
}) => {
  return (
    <div
      className={`
        py-10 px-4 text-center
        ${borderRight ? "border-r border-gray-200" : ""}
        border-b md:border-b-0
      `}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B6B50] font-['Bricolage_Grotesque']">
        {value}
      </h3>

      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
};
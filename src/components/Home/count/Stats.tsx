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

const Stats: React.FC = () => {
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

  const messages = useCountUp(500000, start);
  const delivery = useCountUp(96, start);
  const business = useCountUp(1000, start);
  const open = useCountUp(68, start);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="inline-flex items-center px-3 py-1 text-[10px] sm:text-xs font-semibold bg-blue-100 text-[#0B6B50] rounded-full">
          <span className="h-2 w-2 bg-[#0B6B50] rounded-full mr-2"></span>
          PLATFORM STATS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-4">
          Numbers That Matter
        </h2>
      </div>

      {/* Stats Grid */}
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Card */}
        <StatBox
          value={`${messages.toLocaleString()}+`}
          label="Messages Delivered Daily"
        />

        <StatBox
          value={`${delivery}%`}
          label="Average Delivery Rate"
        />

        <StatBox
          value={`${business.toLocaleString()}+`}
          label="Active Businesses"
        />

        <StatBox
          value={`${open}%`}
          label="WhatsApp Open Rate"
        />
      </div>
    </section>
  );
};

export default Stats;

type StatBoxProps = {
  value: string;
  label: string;
};

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => (
  <div className="bg-white border border-gray-100 rounded-xl text-center py-8 sm:py-10 shadow-sm hover:shadow-md transition">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B6B50]">
      {value}
    </h3>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">
      {label}
    </p>
  </div>
);
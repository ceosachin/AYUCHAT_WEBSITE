import React, { useEffect, useState } from "react";
import { steps } from "./data";
import StepItem from "./StepItem";
import StepContent from "./StepContent";

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === steps.length ? 1 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = steps.find((s) => s.id === activeStep)!;

  return (
    <section className="bg-[#F5F7F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <span className="inline-block px-3 py-2 text-xs font-semibold bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] rounded-full">
          HOW IT WORKS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 leading-tight font-['Bricolage_Grotesque']">
          Get Your First Campaign Live <br />
          <span className="text-[#0B6B50]">
            in Under 10 Minutes
          </span>
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-8 sm:mt-10">

          {/* LEFT */}
          <div className="space-y-3">
            {steps.map((step) => (
              <StepItem
                key={step.id}
                step={step.id}
                title={step.title}
                desc={step.description}
                active={activeStep === step.id}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>

          {/* RIGHT */}
          <StepContent
            title={current.right.title}
            desc={current.right.desc}
            points={current.right.points}
            icon={current.icon}
          />

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
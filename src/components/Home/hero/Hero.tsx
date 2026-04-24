import { ArrowRight, PlayCircle, CheckCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* Animations */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 text-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] rounded-full mt-[-120px] bg-[radial-gradient(circle,_rgba(242,246,245,0.35)_0%,_rgba(168,198,188,0.2)_25%,_rgba(245,244,244,0)_65%)]" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-[#0B6B50] px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-5"
        >
          <div className="bg-[#0B6B50] text-white w-5 h-5 flex items-center justify-center rounded-full">
            <Check size={12} />
          </div>
          Official Meta WhatsApp Business Partner
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-2xl sm:text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight"
        >
          Send Smarter.
          <br />
          Sell Faster.
          <br />
          <span className="text-[#0B6B50]">Scale Bigger.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-4 sm:mt-6 text-[#0B6B50] max-w-xl mx-auto  sm:text-base md:text-lg"
        >
          AyuChat is the all-in-one WhatsApp Business API platform built for growing businesses. Automate campaigns, deploy chatbots, and close more deals - directly on WhatsApp.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button onClick={() => {
  const el = document.getElementById("cta");
  el?.scrollIntoView({ behavior: "smooth" });
}} className="w-full sm:w-auto bg-[#0B6B50] hover:bg-[#0B6B50]/90 text-white py-1 px-5 text-sm sm:text-base font-semibold rounded-lg flex items-center justify-center gap-2 transition">
            Start for Free - No Card Required 
            <ArrowRight size={16} strokeWidth={3.5}/>
          </button>

          <button className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 py-3 px-5 text-sm sm:text-base font-semibold rounded-lg flex items-center justify-center gap-2 transition">
            <PlayCircle size={18} />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-500"
        >
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" />
            Free 14-day trial
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" />
            No credit card
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" />
            Setup in 2 minutes
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#0B6B50]" />
            1,000+ businesses trust us
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
import FeatureCard from "./FeatureCard";
import { MessageSquare, Bot } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 max-w-6xl mx-auto">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        
        <FeatureCard
          title="Bulk Campaigns"
          desc="Send messages at scale to thousands of users instantly."
          color="bg-green-100"
          icon={MessageSquare}
          badge="Popular"
        />

        <FeatureCard
          title="Chatbot Builder"
          desc="Automate conversations and handle queries 24/7."
          color="bg-blue-100"
          icon={Bot}
        />

      </div>
    </section>
  );
};

export default Features;
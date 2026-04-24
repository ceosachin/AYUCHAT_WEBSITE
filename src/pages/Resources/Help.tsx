import ArticleList from "@/components/Resources/Help/ArticleList";
import Categories from "@/components/Resources/Help/Categories";
import FAQ from "@/components/Resources/Help/FAQ";
import Hero from "@/components/Resources/Help/Hero";
import Sidebar from "@/components/Resources/Help/Sidebar";
import SystemStatus from "@/components/Resources/Help/SystemStatus";
import TicketForm from "@/components/Resources/Help/TicketForm";
import VideoSection from "@/components/Resources/Help/VideoSection";


export default function HelpPage() {
  return (
    <div>
      <Hero />
      <Categories />

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-10">
          <SystemStatus />
          <ArticleList />
          <VideoSection />
          <FAQ />
          <TicketForm />
        </div>

        {/* RIGHT */}
        <Sidebar />
      </div>
    </div>
  );
}
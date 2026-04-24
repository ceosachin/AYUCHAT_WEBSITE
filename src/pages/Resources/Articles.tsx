import Hero from "@/components/Resources/Articles/Hero";
import CategoryTabs from "@/components/Resources/Articles/CategoryTabs";
import FeaturedArticle from "@/components/Resources/Articles/FeaturedArticle";
import ArticlesGrid from "@/components/Resources/Articles/ArticlesGrid";
import Sidebar from "@/components/Resources/Articles/Sidebar";
import Pagination from "@/components/Resources/Articles/Pagination";

const Articles = () => {
  return (
    <div className=" min-h-screen">

      {/* Hero Section */}
      <div className="pt-15">
        <Hero />
        <CategoryTabs />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 lg:col-span-2 w-full min-w-0">
          <FeaturedArticle />
          <ArticlesGrid />
          <Pagination />
        </div>

        {/* RIGHT SIDE */}
       <div className="lg:col-span-1 w-full">
        <Sidebar />

       </div>

      </div>

    </div>
  );
};

export default Articles;
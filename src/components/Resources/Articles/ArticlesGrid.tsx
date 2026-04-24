import ArticleCard from "./ArticleCard";

const ArticlesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

        {/* ROW 1 */}
        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="chatbot"
            title="How to Build a WhatsApp Chatbot That Actually Converts (No Code Required)"
            category="Chatbot & AI"
            desc="Step-by-step guide to building intelligent chatbots that handle FAQs, book appointments, and qualify leads around the clock."
            author="Priya Sharma"
            date="Apr 28, 2026"
            time="8 min"
          />
        </div>

        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="comparison"
            title="WhatsApp vs Email vs SMS: Which Channel Delivers the Best ROI in 2026?"
            category="Strategy"
            desc="A data-driven comparison of open rates, click rates, and conversion rates across the top three direct marketing..."
            author="Rahul Mehta"
            date="Apr 24, 2026"
            time="6 min"
          />
        </div>

        {/* ROW 2 */}
        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="pricing"
            title="Meta WhatsApp API Pricing Explained: New Per-Message Model for India (2026)"
            category="Meta API"
            desc="Breaking down Meta's new pricing structure, what changed in April 2026, and exactly how to calculate your campaign cost..."
            author="Arjun Kumar"
            date="Apr 20, 2026"
            time="7 min"
          />
        </div>

        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="caseStudy"
            title="How Devraj Hospital Increased OPD Bookings by 40% Using WhatsApp Automation"
            category="Case Study"
            desc="A detailed look at how a Gwalior hospital used AyuChat to automate appointment reminders and reduce no-shows..."
            author="AyuChat Team"
            date="Apr 15, 2026"
            time="10 min"
          />
        </div>

        {/* ROW 3 */}
        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="automation"
            title="7 WhatsApp Automation Workflows Every Business Should Set Up Today"
            category="Automation"
            desc="Copy-paste automation flows for welcome sequences, abandoned cart recovery, appointment reminders, and..."
            author="Priya Sharma"
            date="Apr 10, 2026"
            time="9 min"
          />
        </div>

        <div className="w-full h-full rounded-xl border shadow-lg overflow-hidden bg-white">
          <ArticleCard
            variant="crm"
            title="How to Build and Manage Your WhatsApp Contact List the Right Way (GDPR Compliant)"
            category="CRM & Contacts"
            desc="Best practices for collecting WhatsApp opt-ins, segmenting contacts, and staying compliant with data protection..."
            author="Rahul Mehta"
            date="Apr 5, 2026"
            time="7 min"
          />
        </div>

      </div>
    </div>
  );
};

export default ArticlesGrid;
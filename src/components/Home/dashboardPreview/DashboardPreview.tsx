import {
  BarChart3,
  MessageSquare,
  Users,
  Share2,
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="bg-[#f5f7f6] py-10 sm:py-14 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* FLOATING CARDS (hidden on small screens) */}
       <div className="hidden md:block absolute top-15 left-2 bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-4 w-33 z-20">

  {/* Title */}
  <p className="text-xs text-gray-500">Messages Today</p>

  {/* Value */}
  <p className="text-xl font-bold mt-1">
    4,821 <span className="text-green-600 text-sm font-semibold">+12%</span>
  </p>

  {/* Graph */}
  <div className="flex items-end gap-1 mt-3">
    {[8, 12, 18, 24, 16].map((h, i) => (
      <div
        key={i}
        className={`w-2 rounded ${
          i === 3
            ? "bg-[#0B6B50]"       // main bar (dark)
            : "bg-[#0B6B50]/60"   // lighter bars
        }`}
        style={{ height: `${h}px` }}
      />
    ))}
  </div>

</div>

        <div className="hidden md:block absolute top-20 right-2 bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-4 w-44 z-20">
          <p className="text-xs text-gray-500">Delivery Rate</p>
          <p className="text-2xl font-bold text-gray-900">96.2%</p>
          <p className="text-xs text-green-600">Industry Avg: 88%</p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="rounded-3xl bg-white border border-gray-200 shadow-[0_50px_120px_rgba(11,107,80,0.15)] overflow-hidden">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <div className="text-[10px] sm:text-xs text-gray-500 bg-gray-100 px-3 sm:px-6 py-1 rounded-full">
              app.ayuchat.in/dashboard
            </div>

            <div className="w-4" />
          </div>

          {/* MAIN CONTENT */}
          <div className="flex flex-col lg:flex-row">

            {/* MOBILE NAV (instead of sidebar) */}
            <div className="lg:hidden flex justify-around border-b border-gray-200 py-3 bg-white text-xs">
              <MobileNav icon={<MessageSquare size={16} />} label="Inbox" />
              <MobileNav icon={<BarChart3 size={16} />} label="Campaigns" />
              <MobileNav icon={<Users size={16} />} label="Contacts" />
              <MobileNav icon={<Share2 size={16} />} label="Automation" />
            </div>

            {/* SIDEBAR (desktop only) */}
            <div className="hidden lg:block w-56 bg-white p-6 border-r border-gray-200">
              <p className="text-sm font-semibold text-[#0B6B50] mb-4">
                Ayuchat
              </p>

              <div className="space-y-2">
                <NavItem icon={<MessageSquare size={16} />} label="Dashboard" />
                <NavItem icon={<MessageSquare size={16} />} label="Inbox" active />
                <NavItem icon={<BarChart3 size={16} />} label="Campaigns" />
                <NavItem icon={<Users size={16} />} label="Contacts" />
                <NavItem icon={<Share2 size={16} />} label="Automations" />
              </div>
            </div>

            {/* CENTER */}
            <div className="flex-1 p-4 sm:p-6 bg-[#F8FAF9]">

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <StatCard title="Total Messages Sent" value="48,210" sub="+12% this month" />
                <StatCard title="Delivery Rate" value="96.2%" sub="Avg: 88%" />
                <StatCard title="Revenue via WhatsApp" value="₹2.4L" sub="This month" />
                <StatCard title="Open Rate" value="71.4%" sub="Avg: 60%" />
              </div>

              <p className="text-xs font-semibold text-gray-500 mb-3">
                ACTIVE CAMPAIGNS
              </p>

              <div className="space-y-3 sm:space-y-4">
                <Campaign title="Knee Replacement Drive - May" percent={87} status="Active" />
                <Campaign title="OPD Appointment Reminders" percent={100} status="Done" />
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-gray-200 p-4 bg-white">
              <p className="text-sm font-semibold mb-4 text-gray-600">
                LIVE INBOX
              </p>

              <InboxItem name="Ramesh Gupta" text="I need to book appointment..." tag="New" />
              <InboxItem name="Sunita Verma" text="Is the test report ready?" tag="Open" />
              <InboxItem name="Priya Kapoor" text="What are the visiting hours?" tag="Open" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;



/* COMPONENTS */

const NavItem = ({ icon, label, active }: any) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer ${
      active
        ? "bg-green-100 text-[#0B6B50]"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </div>
);

const MobileNav = ({ icon, label }: any) => (
  <div className="flex flex-col items-center gap-1 text-gray-600">
    {icon}
    <span>{label}</span>
  </div>
);

const StatCard = ({ title, value, sub }: any) => (
  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200">
    <p className="text-xs text-gray-500">{title}</p>
    <p className="text-lg sm:text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-xs text-green-600 mt-1">{sub}</p>
  </div>
);

const Campaign = ({ title, percent, status }: any) => (
  <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm border border-gray-200">
    
    <div>
      <p className="font-semibold text-gray-900 text-sm sm:text-base">{title}</p>
      <p className="text-xs text-gray-500 mt-1">
        Marketing • 1,200 contacts • Sent 10:00 AM
      </p>
    </div>

    <div className="flex items-center gap-3 flex-wrap">
      <div className="w-24 sm:w-32 h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-[#0B6B50] rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      <span className="text-sm">{percent}%</span>

      <span
        className={`text-xs px-3 py-1 rounded-full ${
          status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

const InboxItem = ({ name, text, tag }: any) => (
  <div className="bg-[#F8FAF9] p-4 rounded-xl border border-gray-200 mb-3">
    
    <p className="font-semibold text-sm text-[#0B6B50]">{name}</p>

    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
      {text}
    </p>

    <div className="flex justify-between mt-3 items-center">
      <span className="text-xs text-gray-400">
        +91 98765 43210
      </span>

      <span
        className={`text-xs px-3 py-1 rounded-full ${
          tag === "New"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {tag}
      </span>
    </div>
  </div>
);
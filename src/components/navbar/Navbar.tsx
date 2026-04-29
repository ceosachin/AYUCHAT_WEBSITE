"use client";

import NavItem from "./NavItem";
import {
  MessageSquare,
  ArrowRight,
  FileText,
  Image,
  HelpCircle,
  BarChart3,
  Users,
  LayoutTemplate,
  Rocket,
  Handshake,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">

        {/* Logo */}
        <div onClick={() => {navigate("/");
        window.scrollTo(0, 0);}} 
        className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-[#0B6B50] rounded-md flex items-center justify-center text-white">
            <img src="/logo.png" alt="" />
          </div>
          <span className="text-lg sm:text-xl font-bold">
            Ayu<span className="text-[#0B6B50]">Chat</span>
          </span>
        </div>

        {/* DESKTOP NAV (UNCHANGED) */}
        <div className="hidden lg:flex items-center gap-1 flex-1 ml-10">
          <NavItem onClick={() => navigate("/about")} label="About Us" />

          <NavItem
            label="Product"
            dropdown={[
              {
                title: "Hub",
                desc: "Send messages",
                icon: <MessageSquare size={16} />,
                onClick: () => navigate("/product/hub"),
              }
            ]}
          />

          <NavItem
            label="Features"
            dropdown={[
              {
                title: "WhatsApp Templates",
                desc: "Templates",
                icon: <LayoutTemplate size={16} />,
              },
              // {
              //   title: "Contact CRM",
              //   desc: "Manage contacts",
              //   icon: <Users size={16} />,
              //   onClick: () => navigate("/feature/contact-crm"),
              // },
              {
                title: "Analytics",
                desc: "Track ROI",
                icon: <BarChart3 size={16} />,
              },
              {
                title: "Broadcasts",
                desc: "Bulk messages",
                icon: <MessageSquare size={16} />,
              },
            ]}
          />

          <NavItem
            label="Resources"
            dropdown={[
              {
                title: "Articles",
                desc: "Guides",
                icon: <FileText size={16} />,
                onClick: () => navigate("/resources/articles"),
              },
              {
                title: "Media Kit",
                desc: "Assets",
                icon: <Image size={16} />,
                onClick: () => navigate("/resources/media-kit"),
              },
              {
                title: "Help Center",
                desc: "Support",
                icon: <HelpCircle size={16} />,
                onClick: () => navigate("/resources/help"),
              },
            ]}
          />

          <NavItem onClick={() => navigate("/integration")} label="Integrations" />
          {/* <NavItem label="App" /> */}
          <NavItem onClick={() => navigate("/pricing")} label="Pricing" />

          <NavItem
            label="More"
            dropdown={[
              {
                title: "Startup Program",
                desc: "Pricing",
                icon: <Rocket size={16} />,
                onClick: () => navigate("/more/startup-program"),
              },
              {
                title: "Partner Program",
                desc: "Earn",
                icon: <Handshake size={16} />,
                onClick: () => navigate("/more/partner-program"),
              },
            ]}
          />
        </div>

        {/* DESKTOP BUTTONS */}
       <div className="hidden lg:flex gap-3">
  <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition">
    Login
  </button>

  <button className="bg-[#0B6B50] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
    Start for Free <ArrowRight size={14} />
  </button>
</div>

        {/* MOBILE ICON */}
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <Menu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-gradient-to-b from-white to-green-50 z-50 shadow-xl flex flex-col transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4  shadow">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          <p onClick={() => {navigate("/about");setOpen(false)}}>About Us</p>

          <MobileDropdown title="Product" toggleMenu={toggleMenu} openMenu={openMenu}>
  <Item label="Hub" onClick={() =>{ navigate("/product/hub");setOpen(false);} }/>
  {/* <Item label="Multi-Business" onClick={() =>{ navigate("/products/multi-business");setOpen(false);} }/>
  <Item label="Bulk Campaigns" onClick={() =>{ navigate("/products/bulk-campaigns");setOpen(false);}} />
  <Item label="Chatbot Builder" onClick={() =>{ navigate("/products/chatbot-builder");setOpen(false);} }/>
  <Item label="Automation Flows" onClick={() =>{ navigate("/products/automation");setOpen(false);} }/>
  <Item label="Live Inbox" onClick={() =>{ navigate("/products/liveinbox");setOpen(false);} }/> */}
</MobileDropdown>

          <MobileDropdown title="Features" toggleMenu={toggleMenu} openMenu={openMenu}>
            <Item label="WhatsApp Templates" />
            <Item label="Contact CRM" onClick={() =>{ navigate("/feature/contact-crm");setOpen(false);} }/>
            <Item label="Analytics" />
            <Item label="Broadcasts" />
          </MobileDropdown>

          <MobileDropdown title="Resources" toggleMenu={toggleMenu} openMenu={openMenu}>
            <Item label="Articles" onClick={() =>{ navigate("/resources/articles");setOpen(false);} }/>
            <Item label="Media Kit" onClick={() =>{ navigate("/resources/media-kit");setOpen(false);} }/>
            <Item label="Help Center" onClick={() =>{ navigate("/resources/help");setOpen(false);} }/>
          </MobileDropdown>

          <p onClick={() =>{ navigate("/integration");setOpen(false);} }>Integrations</p>
          <p >App</p>
          <p onClick={() =>{ navigate("/pricing");setOpen(false);} }>Pricing</p>

          <MobileDropdown title="More" toggleMenu={toggleMenu} openMenu={openMenu}>
            <Item label="Startup Program" onClick={() =>{ navigate("/more/startup-program");setOpen(false);} }/>
            <Item label="Partner Program" onClick={() =>{ navigate("/more/partner-program");setOpen(false);} }/>
          </MobileDropdown>

          <div className="pt-4 space-y-2">
  <button className="w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition">
    Login
  </button>

  <button className="w-full bg-[#0B6B50] text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
    Start for Free
  </button>
</div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </div>
  );
};

export default Navbar;

/* Mobile dropdown */
const MobileDropdown = ({ title, children, openMenu, toggleMenu }: any) => {
  const isOpen = openMenu === title;

  return (
    <div>
      <button
        onClick={() => toggleMenu(title)}
        className="flex justify-between w-full font-medium"
      >
        {title}
        <ChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && <div className="ml-3 mt-2 space-y-2">{children}</div>}
    </div>
  );
};

const Item = ({ label, onClick }: any) => (
  <p
    onClick={onClick}
    className="text-sm text-gray-600 cursor-pointer hover:text-[#0B6B50] transition"
  >
    {label}
  </p>
);
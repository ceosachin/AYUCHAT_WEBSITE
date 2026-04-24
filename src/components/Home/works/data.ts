import {
  Rocket,
  ClipboardList,
  Megaphone,
  BarChart3,
} from "lucide-react";

export const steps = [
  {
    id: 1,
    title: "Connect Your WhatsApp Business Account",
    description:
      "Sign up with your email and connect your WhatsApp Business number via Meta.",
    icon: Rocket,
    right: {
      title: "Account Connected",
      desc: "Your WhatsApp Business number is verified and ready through Meta's official API.",
      points: [
        "Email verification complete",
        "WABA number connected via Embedded Signup",
        "Business profile configured",
        "14-day free trial activated",
      ],
    },
  },
  {
    id: 2,
    title: "Import Your Contacts",
    description:
      "Upload CSV or connect your Facebook Ads account to sync leads.",
    icon: ClipboardList,
    right: {
      title: "Contacts Imported",
      desc: "5,000+ contacts loaded from your CSV file, with tags and segments applied.",
      points: [
        "5,241 contacts imported from CSV",
        "Segments created: VIP, New, Inactive",
        "Custom fields: DOB, City, Last Purchase",
        "Facebook Ads leads syncing automatically",
      ],
    },
  },
  {
    id: 3,
    title: "Create a Template and Launch",
    description:
      "Pick from templates or create your own and send campaigns.",
    icon: Megaphone,
    right: {
      title: "Campaign Sent",
      desc: "1,200 contacts received a personalized reminder.",
      points: [
        "Template approved",
        "Audience selected",
        "Sent at 10:00 AM - 96.2% delivered",
        "87 replies received",
      ],
    },
  },
  {
    id: 4,
    title: "Track Results and Optimize",
    description:
      "Monitor performance and ROI in real time.",
    icon: BarChart3,
    right: {
      title: "Results Tracked",
      desc: "Real-time analytics show your campaign performance.",
      points: [
        "Delivery rate: 96.2%",
        "Read rate: 71.4%",
        "Revenue attributed",
        "ROI: 15x",
      ],
    },
  },
];
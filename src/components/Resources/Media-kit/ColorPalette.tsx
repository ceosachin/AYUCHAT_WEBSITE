import { Copy, Check } from "lucide-react";
import { useState } from "react";

const colors = [
  { name: "Primary Green", hex: "#0B6B50" },
  { name: "Accent Green", hex: "#10A87F" },
  { name: "Light Green", hex: "#E8F7F2" },
  { name: "Deep Dark", hex: "#0A120E" },
  { name: "Ink", hex: "#111B16" },
  { name: "Muted Text", hex: "#6B8278" },
  { name: "Background", hex: "#F8FBFA" },
  { name: "Border", hex: "#DDE8E3" },
  { name: "White", hex: "#FFFFFF" },
  { name: "WhatsApp Green", hex: "#25D366" },
];

export default function ColorPalette() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="bg-gray-50 w-full">

      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* TAG */}
        <span className="text-[10px] sm:text-xs font-bold bg-blue-100 text-[#0B6B50] px-3 py-1 rounded-full">
          BRAND COLORS
        </span>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          Color Palette
        </h2>

        {/* DESC */}
        <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
          These are the official AyuChat brand colors. Click any swatch to copy the hex code.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => copyToClipboard(color.hex)}
              className="border border-[#E6F0EC] rounded-2xl overflow-hidden bg-white cursor-pointer 
                         hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {/* COLOR BLOCK */}
              <div
                className={`h-20 sm:h-24 w-full ${
                  color.hex === "#FFFFFF" ? "border-b border-gray-200" : ""
                }`}
                style={{ backgroundColor: color.hex }}
              />

              {/* CONTENT */}
              <div className="p-3 sm:p-4">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {color.name}
                </p>

                <p className="text-xs sm:text-sm text-gray-500">
                  {color.hex}
                </p>

                <div className="flex items-center gap-1 text-[#0B6B50] text-xs sm:text-sm mt-2">
                  {copied === color.hex ? (
                    <>
                      <Check size={14} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy Hex
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
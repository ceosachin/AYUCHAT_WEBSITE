import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Item = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  onClick?: () => void; 
};

type Props = {
  label: string;
  dropdown?: Item[];
  grid?: boolean;
  onClick?: () => void;
};

const NavItem = ({ label, dropdown, grid, onClick }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      
      {/* Button */}
      <button
  onClick={() => {
    if (dropdown) {
      setOpen(!open);
    } else {
      onClick?.(); 
    }
  }}
  className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#0B6B50] font-medium hover:text-green-900 hover:bg-green-50 rounded-md cursor-pointer"
>
        {label}
        {dropdown && (
          <ChevronDown
            size={14}
            strokeWidth={1.5}
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {/* Dropdown */}
      {dropdown && open && (
        <div className="absolute left-1/2 lg:-translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50 min-w-[200px]">
          
          <div
            className={`${
              grid
                ? "grid grid-cols-2 gap-2 min-w-[420px]"
                : "flex flex-col"
            }`}
          >
            {dropdown.map((item, i) => (
              
              <div
                key={i}
                onClick={() => {
                  item.onClick?.();   
                  setOpen(false);     
                }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition"
              >
                
                {/* Icon */}
                <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-lg bg-green-50 flex items-center justify-center text-green-700">
                  <div className="w-4 h-4 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-semibold">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default NavItem;
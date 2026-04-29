// components/ProductCard.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  title: string;
  tag: string;
  desc: string;
  points: string[];
  footer: string;
  color: string;
  gradient: string;
  HeaderComponent: React.ReactNode;
  path: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group h-full rounded-3xl border bg-white overflow-hidden transition-all duration-300 border-gray-200">

      {/* FLEX FIX */}
      <div
        className="h-full flex flex-col border-2 border-transparent rounded-3xl transition-all duration-300"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = product.color;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
        }}
      >

        {/* HEADER */}
        <div
  className={`relative h-[200px] bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden `}
>
  <div className="relative">
    {product.HeaderComponent}
  </div>
</div>

        {/* BODY */}
        <div className="p-6 flex flex-col flex-1">

          {/* TAG */}
           <span
  className="inline-flex items-center w-fit text-[10px] font-semibold px-2 py-[4px] rounded-full leading-none"
  style={{
    backgroundColor: `${product.color}1A`, // light bg
    color: product.color,
    border: `1px solid ${product.color}33`
  }}
>
  {product.tag}
</span>

          {/* TITLE */}
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            {product.title}
          </h3>

          {/* DESC */}
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {product.desc}
          </p>

          {/* POINTS */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {product.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span
                  className="mt-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: product.color }}
                />
                {point}
              </li>
            ))}
          </ul>

          {/* FOOTER (FIXED ALIGNMENT) */}
          <div className="mt-auto pt-6 flex justify-between items-center text-sm font-medium">
            <span style={{ color: product.color }}>
              {product.footer}
            </span>

            <button
              onClick={() => navigate(product.path)}
              className="cursor-pointer"
              style={{ color: product.color }}
            >
              Explore Feature →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
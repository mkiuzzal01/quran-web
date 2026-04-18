"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { closeSettings } from "@/app/redux/slice/ui.slice";
import { ReactNode } from "react";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
  title?: string;
  width?: string;
}

export default function Sheet({
  open,
  onClose,
  children,
  side = "left",
  title,
  width = "w-72",
}: SheetProps) {
  const isLeft = side === "left";
  const dispatch = useAppDispatch();

  return (
    <>


      {/* ================= BACKDROP ================= */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50
          transition-opacity duration-1000 ease-in-out
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ================= SHEET ================= */}
      <aside
        className={`
          fixed top-0 z-50 h-full ${width}
          bg-base
          shadow-2xl flex flex-col

          will-change-transform
          transition-transform duration-1000 ease-in-out

          ${isLeft ? "left-0" : "right-0"}

          ${open
            ? "translate-x-0"
            : isLeft
              ? "-translate-x-full"
              : "translate-x-full"
          }
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#4db891] ">
          <h2 className="text-gold font-arabic text-lg">
            {title}
          </h2>

          <button
            onClick={() => dispatch(closeSettings())}
            className="icon-btn"
          >
            ✕
          </button>
        </div>

        {children}
      </aside>
    </>
  );
}

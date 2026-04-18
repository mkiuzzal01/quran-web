"use client";
import Link from "next/link";
import Container from "../shared/Container";
import { Menu, Share2, Globe } from "lucide-react";
import Sidebar from "./SaidBar";
import { toggleSettings } from "@/app/redux/slice/ui.slice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

export default function Navbar() {
  const { settingsOpen } = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="h-16 bg-surface border-b border-theme flex items-center relative">

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)" }}
        />

        <Container className="flex items-center w-full gap-3">

          {/* MENU BUTTON */}
          <button
            onClick={() => dispatch(toggleSettings())}
            className={`icon-btn lg:hidden shrink-0 transition-colors ${settingsOpen
              ? "border-[rgba(77,184,145,0.4)] text-primary bg-[rgba(77,184,145,0.1)]"
              : ""
              }`}
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* BRAND */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-3 no-underline">

              <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(201,168,76,0.22)] bg-elevated shrink-0">
                <span className="font-arabic text-[22px] text-gold leading-none">ق</span>
              </div>

              <div className="flex flex-col gap-[3px]">
                <span className="text-gold text-2xl tracking-[3px] font-medium leading-none">
                  The Holy Qur'an
                </span>
                <span className="text-muted text-sm italic leading-none">
                  Guidance for mankind
                </span>
              </div>

            </Link>
          </div>



          {/* ACTIONS */}
          <div className="flex items-center gap-[6px]">
            <button className="icon-btn">
              <Share2 className="w-[15px] h-[15px]" />
            </button>
            <button className="icon-btn">
              <Globe className="w-[15px] h-[15px]" />
            </button>
          </div>

        </Container>
      </header>

      {settingsOpen && <Sidebar />}
    </>
  );
}

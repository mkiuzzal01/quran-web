"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { closeSettings } from "@/app/redux/slice/ui.slice";
import Sheet from "../shared/Sheet";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.settingsOpen);

  return (
    <Sheet
      open={open}
      onClose={() => dispatch(closeSettings())}
      side="left"
      width="w-96"
      title="Settings"
    >
      <div className="flex-1 p-4 space-y-2">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gold/10">
          Home
        </button>

        <button className="w-full text-left px-3 py-2 rounded hover:bg-gold/10">
          Bookmarks
        </button>

        <button className="w-full text-left px-3 py-2 rounded hover:bg-gold/10">
          Settings
        </button>

        <button className="w-full text-left px-3 py-2 rounded hover:bg-gold/10">
          About
        </button>
      </div>
    </Sheet>
  );
}

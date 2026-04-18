"use client";

import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    </div>
  );
}

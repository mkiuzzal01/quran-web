"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { TAyah } from "@/app/redux/types/TQuran";

export default function AyahCard({ ayah }: { ayah: TAyah }) {
  const { arabicFont, arabicSize, translationSize } =
    useAppSelector((state) => state.settings);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fontMap = {
    cairo: "'Cairo', sans-serif",
    amiri: "'Amiri', serif",
  };

  return (
    <div className="card space-y-3 transition hover:shadow-md">
      <p
        dir="rtl"
        className="arabic leading-loose text-right"
        style={{
          fontSize: `${arabicSize}px`,
          fontFamily: fontMap[arabicFont],
        }}
      >
        {ayah.text_ar}
      </p>

      <p
        className="translation text-muted leading-relaxed"
        style={{
          fontSize: `${translationSize}px`,
        }}
      >
        {ayah.text_en}
      </p>

      <div className="flex justify-between items-center text-xs text-muted pt-2 border-t border-theme/30">
        Ayah {ayah.number}
      </div>
    </div>
  );
}

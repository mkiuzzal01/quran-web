"use client";

import { useAppSelector } from "@/app/redux/hooks";
import { TAyah } from "@/app/redux/types/TQuran";

export default function AyahCard({
  ayah,
  surahNumber,
}: {
  ayah: TAyah;
  surahNumber: number;
}) {
  const { arabicFont, arabicSize, translationSize } =
    useAppSelector((state) => state.settings);

  return (
    <div className="card space-y-4">

      {/* Arabic */}
      <p
        className="arabic"
        style={{
          fontSize: arabicSize,
          fontFamily:
            arabicFont === "uthmanic" ? "Uthmanic" : "Amiri",
        }}
      >
        {ayah.text_ar}
      </p>

      {/* Translation */}
      <p
        className="translation"
        style={{ fontSize: translationSize }}
      >
        {ayah.text_en}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-muted">
        <span>
          Surah {surahNumber}: Ayah {ayah.number}
        </span>

      </div>
    </div>
  );
}

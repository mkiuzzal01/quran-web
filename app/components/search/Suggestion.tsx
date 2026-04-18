import Link from "next/link";

interface Ayah {
  ayah_number: number;
  surah: number;
  surah_name_ar: string;
  surah_name_en: string;
  text_ar: string;
  text_en: string;
}

export default function Suggestion({ data }: { data: Ayah[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="absolute left-0 top-full w-full mt-2 bg-surface border border-theme rounded-xl shadow-theme z-50 p-4 text-center text-sm text-muted">
        No results found
      </div>
    );
  }

  return (
    <div
      className="
        absolute left-0 top-full w-full mt-2
        max-h-96 overflow-y-auto
        bg-surface border border-theme
        rounded-xl shadow-theme z-50
        scrollbar-hide
      "
    >
      {data.map((item) => (
        <Link
          key={`${item.surah}-${item.ayah_number}`}
          href={`/surah/${item.surah}`}
          className="
            group block px-4 py-3
            border-b border-theme last:border-none
            hover:bg-elevated transition-colors
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-primary group-hover:text-primary-light transition">
              {item.surah_name_en}
            </p>

            <span className="text-[11px] px-2 py-0.5 rounded-full bg-elevated text-muted">
              Ayah {item.ayah_number}
            </span>
          </div>

          {/* Arabic name */}
          <p className="text-xs text-muted mt-0.5">
            {item.surah_name_ar}
          </p>

          {/* Preview */}
          <p className="text-sm mt-2 text-text line-clamp-2 leading-relaxed">
            {item.text_en}
          </p>
        </Link>
      ))}
    </div>
  );
}

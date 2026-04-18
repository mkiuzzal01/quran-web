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

  if (data.length === 0) {
    return <p className="absolute left-0 p-2 top-full w-full bg-surface border border-theme rounded-lg shadow-theme overflow-hidden z-50">No results found</p>;
  }
  return (
    <div className="max-h-96 absolute left-0 top-full w-full bg-surface border border-theme rounded-lg shadow-theme overflow-hidden z-50 overflow-y-scroll">
      {data.map((item) => (
        <Link
          key={`${item.surah}-${item.ayah_number}`}
          href={`/surah/${item.surah}`}
          className="block px-4 py-3 hover:bg-elevated transition border-b border-theme last:border-none"
        >
          <div className="text-lg font-bold text-primary">
            {item.surah_name_en} ({item.surah_name_ar})
          </div>

          <div className="text-xs text-muted">
            Ayah {item.ayah_number}
          </div>
          <div className="text-sm mt-1 line-clamp-2 text-text">
            {item.text_en}
          </div>
        </Link>
      ))}
    </div>
  );
}

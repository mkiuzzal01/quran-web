import { getSurahById } from "@/actions/quires/surah.api";
import AyahCard from "@/app/components/shared/AyahCard";
import Container from "@/app/components/shared/Container";
import { TAyah } from "@/app/redux/types/TQuran";

interface SurahPageProps {
  params: Promise<{ id: string }>;
}

export default async function SurahPage({ params }: SurahPageProps) {
  const { id } = await params;
  const res = await getSurahById(id);

  if (!res?.success || !res.data) {
    return (
      <Container>
        <div className="py-10 text-center text-muted">
          Failed to load surah.
        </div>
      </Container>
    );
  }

  const { name_ar, name_en, surah, type, ayahs } = res.data;

  return (
    <div className="bg-base min-h-screen">
      <Container className="py-10 space-y-10">

        {/* Header */}
        <div className="card text-center space-y-3">
          <p className="text-secondary text-sm">
            Surah {surah} • {type}
          </p>

          <h1 className="arabic text-primary">
            {name_ar}
          </h1>

          <h2 className="text-lg text-secondary tracking-wide">
            {name_en}
          </h2>
        </div>

        {/* Bismillah (skip for Surah 9) */}
        {surah !== 9 && (
          <p className="arabic text-center text-primary">
            بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
        )}

        {/* Ayahs */}
        <div className="space-y-6">
          {ayahs.map((ayah: TAyah) => (
            <AyahCard
              key={ayah.number}
              ayah={ayah}
              surahNumber={surah}
            />
          ))}
        </div>

      </Container>
    </div>
  );
}

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
        <div className="py-20 text-center text-muted text-sm">
          Failed to load surah.
        </div>
      </Container>
    );
  }

  const { name_ar, name_en, surah, type, ayahs } = res.data;

  console.log(ayahs)

  return (
    <div className="min-h-screen from-base to-surface">
      <Container className="py-12 space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-4">

          <div className="flex  justify-center items-center flex-row gap-2 border-b mx-auto w-fit">
            <h1 className="text-3xl md:text-4xl lg:text-3xl text-primary leading-relaxed">
              {name_ar}
            </h1>
            <div className="border-4 rounded-full h-2 w-2" />
            <h2 className="text-lg lg:text-xl 2xl:text-3xl text-secondary tracking-wide">
              {name_en}
            </h2>
          </div>
        </div>

        {/* BISMILLAH */}
        {surah !== 9 && ayahs[0].text_ar !== "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"  && (
          <div className="flex flex-col items-center justify-center  text-center py-4">
            <p className="arabic text-2xl text-primary opacity-90">
              بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <div className="border-4 rounded-full h-2 w-2" />
            <p className="text-secondary">
              “In the name of Allah, the Most Compassionate, the Most Merciful.”
            </p>
          </div>
        )}

        {/* AYAH LIST */}
        <div className="space-y-4 md:space-y-6">
          {ayahs.map((ayah: TAyah, index: number) => (
            <div
              key={ayah.number}
            >
              <AyahCard
                ayah={ayah}

              />

              {index !== ayahs.length - 1 && (
                <div className="mt-6 flex justify-center">
                  <div className="w-10 h-px bg-theme opacity-10" />
                </div>
              )}
            </div>
          ))}


          <p className="text-xs tracking-widest text-muted uppercase">
            Surah Number {surah} • Type {type}
          </p>
        </div>

      </Container>
    </div>
  );
}

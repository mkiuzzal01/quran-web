import { getAllSurah } from "@/actions/quires/surah.api";
import Container from "../shared/Container";
import Link from "next/link";

export default async function AllSurah() {
  const surah = await getAllSurah();
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
        {surah?.data?.map((item: any) => (
          <Link href={`/surah/${item.id}`} key={item.id} className="p-4 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-all duration-300">
            <p className="text-2xl font-bold">{item.name_ar}</p>
            <p className="text-xl text-secondary">{item.name_en}</p>
          </Link>
        ))}
      </div>
    </Container>
  )
}

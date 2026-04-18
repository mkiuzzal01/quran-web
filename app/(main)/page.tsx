import { getAyahBySearch } from "@/actions/quires/surah.api";
import SearchBar from "../components/search/SearchBar";
import AllSurah from "../components/surah-list/AllSurah";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function page({ searchParams }: Props) {
  const { q } = await searchParams;
  return (
    <>
      <SearchBar searchQuery={q || ""} />
      <AllSurah />
    </>
  );
}

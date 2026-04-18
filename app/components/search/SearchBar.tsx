import { getAyahBySearch } from "@/actions/quires/surah.api";
import SearchForm from "./SearchForm";
import Suggestion from "./Suggestion";
import Container from "../shared/Container";

interface SearchBarProps {
  searchQuery: string;
}

export default async function SearchBar({ searchQuery }: SearchBarProps) {
  const { data } = searchQuery
    ? await getAyahBySearch(searchQuery)
    : { data: null };

  const suggestions = data || [];

  return (
    <Container>
      <div className="relative w-full max-w-md mx-auto">
        <SearchForm />
        {searchQuery && suggestions.length > 0 && (
          <Suggestion data={suggestions} />
        )}
      </div>
    </Container>
  );
}

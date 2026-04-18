"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm({
  initialValue,
}: {
  initialValue?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(initialValue || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      router.replace(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex justify-center py-10">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="input shadow-theme w-full max-w-md"
      />
    </div>
  );
}

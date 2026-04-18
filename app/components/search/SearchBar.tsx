import React from "react";

export default function SearchBar() {
  return (
    <div className="flex justify-center py-10 bg-base">
      <form
        className="flex w-full max-w-md items-center gap-2"
        role="search"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        <input
          id="search"
          type="text"
          placeholder="Search ayah..."
          className="input shadow-theme"
        />

        <button
          type="submit"
          className="btn btn-primary shadow-theme"
        >
          Search
        </button>
      </form>
    </div>
  );
}

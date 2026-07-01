"use client";

import { useMemo, useState } from "react";

import { templates } from "@/data/templates";
import useDebounce from "@/hooks/useDebounce";


import SearchBar from "@/components/explore/SearchBar";
import FilterBar from "@/components/explore/FilterBar";
import TemplateGrid from "@/components/explore/TemplateGrid";

export default function ExplorePage() {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Latest");

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.title
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        category === "All" ||
        template.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [debouncedSearch, category]);
  

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-4xl font-bold">
        Explore AI Templates
      </h1>

      <div className="mt-10 flex flex-col gap-4 md:flex-row">

        <div className="flex-1">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <FilterBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

      </div>

      <TemplateGrid
        templates={filteredTemplates}
      />

    </main>
  );
}
interface FilterBarProps {
  category: string;
  setCategory: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
}

export default function FilterBar({
  category,
  setCategory, 
  sort,
  setSort,
}: FilterBarProps) {
  return (
    <>
    <select
      className="rounded-lg border p-3"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All Categories</option>

      <option value="Writing">
        Writing
      </option>

      <option value="Business">
        Business
      </option>

      <option value="Productivity">
        Productivity
      </option>

      <option value="Social Media">
        Social Media
      </option>
    </select>
    <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="rounded-lg border p-3"
>
  <option value="default">Sort</option>

  <option value="rating">
    Highest Rating
  </option>

  <option value="az">
    A-Z
  </option>
</select>
</>
  );
}
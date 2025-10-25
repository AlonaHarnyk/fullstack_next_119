import { getCategories } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";
import Link from "next/link";

const Filters = async () => {
  const categories = await getCategories();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link href={`/notes/filter/${ALL_NOTES}`}>All</Link>
        </li>
        {categories.map((item) => (
          <li key={item.id}>
            <Link href={`/notes/filter/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;

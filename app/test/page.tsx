import { getCategories } from "@/lib/api";

import { Suspense, use } from "react";

function Categories() {
  const items = use(getCategories());
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default function Test() {
  return (
    <Suspense fallback={<div>Loading categories…</div>}>
      <Categories />
    </Suspense>
  );
}

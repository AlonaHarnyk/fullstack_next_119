"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";
// import { ChangeEvent, useState } from "react";

interface Props {
  categoryId: string;
}

// const Search = ({ categoryId }: Props) => {
//   const [value, setValue] = useState("");

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

//   return (
//     <>
//       <input type="text" value={value} onChange={handleChange} />
//       <Link href={`/notes/filter/${categoryId}/${value}`}>Search</Link>
//     </>
//   );
// };

// export default Search;

const Search = ({ categoryId }: Props) => {
  const router = useRouter();

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    router.push(`/notes/filter/${categoryId}/${title}`);
  };

  return (
    <form action={onSubmit}>
      <input type="text" name="title" />
      <button>Search</button>
    </form>
  );
};

export default Search;

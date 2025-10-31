"use client";

import { createNote, CreateNoteData } from "@/lib/api";
import { useNoteDraft } from "@/lib/store/noteDraft";
import { CategoryType } from "@/lib/types";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface Props {
  categories: CategoryType[];
}

const CreateNoteForm = ({ categories }: Props) => {
  const router = useRouter();
  const { draft, setDraft, deleteDraft } = useNoteDraft();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      deleteDraft()
      router.push("/notes/filter/all");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const noteData = Object.fromEntries(formData) as unknown as CreateNoteData;
    mutate(noteData);

    // const title = formData.get("title") as string;
    // const content = formData.get("content") as string;
    // const categoryId = formData.get("categoryId") as string;
    // mutate({ title, content, categoryId });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  return (
    <form action={handleSubmit}>
      <label>
        Title
        <input defaultValue={draft.title} type="text" name="title" onChange={handleChange} />
      </label>
      <br />
      <label>
        Content
        <input defaultValue={draft.content}  type="text" name="content" onChange={handleChange} />
      </label>
      <br />
      <label>
        Category
        <select defaultValue={draft.categoryId}  name="categoryId" onChange={handleChange}>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default CreateNoteForm;

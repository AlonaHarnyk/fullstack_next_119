"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const NoteDetailsClientPage = () => {
  const { noteId } = useParams<{ noteId: string }>();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => getSingleNote(noteId),
    refetchOnMount: false,
  });

  return (
      <>
        {isLoading && <h1>LOADING...</h1>}
        {isError && <h1>ERROR!</h1>}
        <h2>{note?.title}</h2>
        <p>{note?.content}</p>
      </>
  );
};

export default NoteDetailsClientPage;

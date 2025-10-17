"use client";

import EditNoteForm from "@/components/EditNoteForm/EditNoteForm";
import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

const NoteDetailsClientPage = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const [isEditingMode, setIsEditingMode] = useState(false);

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
      {!isEditingMode ? (
        <>
          {isLoading && <h1>LOADING...</h1>}
          {isError && <h1>ERROR!</h1>}
          <h2>{note?.title}</h2>
          <p>{note?.content}</p>
          <button onClick={() => setIsEditingMode(true)}>Edit</button>
        </>
      ) : (
        note && (
          <EditNoteForm note={note} closeForm={() => setIsEditingMode(false)} />
        )
      )}
    </>
  );
};

export default NoteDetailsClientPage;

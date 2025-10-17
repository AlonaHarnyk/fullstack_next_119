import { editNote, NewNoteData } from "@/lib/api";
import { NoteType } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  note: NoteType;
  closeForm: () => void;
}

const EditNoteForm = ({ note, closeForm }: Props) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newNoteData: NewNoteData) => editNote(note.id, newNoteData),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["note"],
      });
      closeForm();
    },
  });

  const handleUpdateNote = async () => {
    mutate({ title, content });
  };

  return (
    <form action={handleUpdateNote}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditNoteForm;

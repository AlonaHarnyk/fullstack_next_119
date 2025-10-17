import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

const Notes = async () => {
  const res = await getNotes();

  return <NoteList notes={res.notes} />;
};
export default Notes;

import { NoteType } from "@/lib/types";
import NoteItem from "../NoteListItem/NoteListItem";

interface Props {
  notes: NoteType[];
}
const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

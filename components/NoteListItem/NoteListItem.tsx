import { NoteType } from "@/lib/types";
import Link from "next/link";

interface Props {
  note: NoteType;
}
const NoteItem = ({ note }: Props) => {
  return <Link href={`/notes/${note.id}`}>{note.title}</Link>;
};

export default NoteItem;

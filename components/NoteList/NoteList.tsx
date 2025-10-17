import { NoteType } from '@/lib/types'
import NoteItem from '../NoteListItem/NoteListItem'

type Props = {
  notes: NoteType[]
}
const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  )
}

export default NoteList
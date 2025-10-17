import { NoteType } from '@/lib/types'

type Props = {
  note: NoteType
}
const NoteItem = ({ note }: Props) => {
  return (
    <li>
      <p>{note.title}</p>
    </li>
  )
}

export default NoteItem
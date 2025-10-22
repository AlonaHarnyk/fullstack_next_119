import NoteList from "@/components/NoteList/NoteList";
import Search from "@/components/Search/Search";
import { getNotes } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const FilterPage = async ({ params }: Props) => {
  const { slug } = await params;

  console.log(slug)

  const res = await getNotes(slug[0] === ALL_NOTES ? undefined : slug[0], slug[1]);

  return (
    <>
      <Search categoryId={slug[0]} />
      <NoteList notes={res.notes} />
    </>
  );
};

export default FilterPage;

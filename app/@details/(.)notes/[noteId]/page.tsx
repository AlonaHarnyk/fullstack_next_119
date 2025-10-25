import GoBackButton from "@/components/GoBackButton/GoBackButton";
import { getSingleNote } from "@/lib/api";

interface Props {
  params: Promise<{ noteId: string }>;
}

const PreviewDetails = async ({ params }: Props) => {
  const { noteId } = await params;

  const details = await getSingleNote(noteId);

  return (
    <>
      <hr />
      <GoBackButton />
      <h2>{details?.title}</h2>
      <p>{details?.content}</p>
    </>
  );
};

export default PreviewDetails;

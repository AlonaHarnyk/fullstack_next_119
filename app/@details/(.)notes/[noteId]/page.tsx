import ClosePreviewButton from "@/components/ClosePreviewButton/ClosePreviewButton";
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
      <ClosePreviewButton />
      <h2>{details?.title}</h2>
      <p>{details?.content}</p>
    </>
  );
};

export default PreviewDetails;

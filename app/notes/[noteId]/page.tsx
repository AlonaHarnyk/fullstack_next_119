import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClientPage from "./NoteDetailsClientPage";
import { getSingleNote } from "@/lib/api";
import { Metadata } from "next";

interface Props {
  params: Promise<{ noteId: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { noteId } = await params;
  const data = await getSingleNote(noteId);

  return {
    title: data.title,
    description: data.content,
  };
};

const NotePage = async ({ params }: Props) => {
  const { noteId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => getSingleNote(noteId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClientPage />
    </HydrationBoundary>
  );
};
export default NotePage;

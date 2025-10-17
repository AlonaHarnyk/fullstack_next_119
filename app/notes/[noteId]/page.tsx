import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClientPage from "./NoteDetailsClientPage";
import { getSingleNote } from "@/lib/api";

interface Props {
  params: Promise<{ noteId: string }>;
}

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

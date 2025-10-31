import CreateNoteForm from "@/components/CreateNoteForm/CreateNoteForm";
import { getCategories } from "@/lib/api";

const CreateNotePage = async () => {
  const categories = await getCategories();

  return <CreateNoteForm categories={categories} />;
};

export default CreateNotePage;

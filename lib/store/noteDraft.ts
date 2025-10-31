import { create } from "zustand";
import { CreateNoteData } from "../api";
import { persist } from "zustand/middleware";

interface NoteDraft {
  draft: CreateNoteData;
  setDraft: (newDraft: CreateNoteData) => void;
  deleteDraft: () => void;
}

const initialDraft: CreateNoteData = {
  title: "",
  content: "",
  categoryId: "",
};

export const useNoteDraft = create<NoteDraft>()(
  persist(
    (set) => {
      return {
        draft: initialDraft,
        setDraft: (newDraft: CreateNoteData) => set({ draft: newDraft }),
        deleteDraft: () => set({ draft: initialDraft }),
      };
    },
    { name: "draft", partialize: (state) => ({ draft: state.draft }) }
  )
);

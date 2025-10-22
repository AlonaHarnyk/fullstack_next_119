import axios from "axios";
import { CategoryType, NoteType } from "./types";

axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com/";

export interface NoteListType {
  notes: NoteType[];
  total: number;
}

export const getNotes = async () => {
  const { data } = await axios.get<NoteListType>("/notes");
  return data;
};

export const getSingleNote = async (id: string) => {
  const { data } = await axios.get<NoteType>(`/notes/${id}`);
  return data;
};

export interface NewNoteData {
  title: string;
  content: string;
}

export const editNote = async (
  id: string,
  newNotedata: NewNoteData
): Promise<NoteType> => {
  const { data } = await axios.patch<NoteType>(`/notes/${id}`, newNotedata);
  return data;
};

export const getCategories = async () => {
  const { data } = await axios.get<CategoryType[]>(`/categories`);
  return data;
};

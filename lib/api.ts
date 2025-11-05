import axios from "axios";
import { CategoryType, NoteType, User } from "./types";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export interface NoteListType {
  notes: NoteType[];
  total: number;
}

export const getNotes = async (categoryId?: string, title?: string) => {
  const { data } = await api.get<NoteListType>("/notes", {
    params: {
      categoryId,
      title,
    },
  });
  return data;
};

export const getSingleNote = async (id: string) => {
  const { data } = await api.get<NoteType>(`/notes/${id}`);
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
  const { data } = await api.get<CategoryType[]>(`/categories`);
  return data;
};

export interface CreateNoteData {
  title: string;
  content: string;
  categoryId: string;
}

export const createNote = async (
  noteData: CreateNoteData
): Promise<NoteType> => {
  const { data } = await api.post<NoteType>(`/notes`, noteData);
  return data;
};

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = async (registerData: RegisterData): Promise<User> => {
  const { data } = await api.post<User>(`/auth/register`, registerData);
  return data;
};

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (loginData: LoginData): Promise<User> => {
  const { data } = await api.post<User>(`/auth/login`, loginData);
  return data;
};

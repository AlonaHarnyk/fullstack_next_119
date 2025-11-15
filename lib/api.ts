import axios from "axios";
import { CategoryType, NoteType, User } from "./types";

export const api = axios.create({
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

export interface SuccessState {
  success: boolean;
}

export const checkSession = async (): Promise<boolean> => {
  const { data } = await api.get<SuccessState>(`/auth/session`);
  return data.success;
};

export const getUser = async (): Promise<User> => {
  const { data } = await api.get<User>(`/auth/me`);
  return data;
};

export const logout = async (): Promise<SuccessState> => {
  const { data } = await api.post<SuccessState>(`/auth/logout`);
  return data;
};

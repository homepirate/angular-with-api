import { createReducer, on } from "@ngrx/store";
import { addNote, deleteNote, resetNotes } from "../counter.actions";

export interface Note {
    title: string;
    content: string;
  }

  export const initialState: Note[] = [];

export const noteReducer = createReducer(
  initialState,
  on(addNote, (state, { title, content }) => [...state, { title, content }]),
  on(deleteNote, (state, { title }) => state.filter(note => note.title !== title)),
  on(resetNotes, () => [])
);
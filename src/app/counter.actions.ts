import { createAction, props } from "@ngrx/store";

export const addNote = createAction(
    '[Note] Add Note',
    props<{ title: string, content: string }>()
  );
  
  export const deleteNote = createAction(
    '[Note] Delete Note',
    props<{ title: string }>()
  );
  
  export const resetNotes = createAction(
    '[Note] Reset Notes'
  );
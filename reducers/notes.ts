import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState: NoteType[] = [];

const slice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addToNotes(state, action: PayloadAction<NoteType>) {
      return [
        {
          id: uuid.v4() as string,
          created_at: Date.now(),
          ...action.payload,
        },
        ...state,
      ];
    },
    updateNote(state, action: PayloadAction<NoteType>) {
      return state.map(note =>
        note.id === action.payload.id ? {...note, ...action.payload} : note,
      );
    },
    deleteNote(state, action: PayloadAction<string>) {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const {addToNotes, updateNote, deleteNote} = slice.actions;

export default slice.reducer;

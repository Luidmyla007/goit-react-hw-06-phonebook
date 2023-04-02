import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  initialState: [],
  name: 'contacts',
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        const newContact = {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
        return newContact;
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

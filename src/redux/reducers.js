import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const contacts = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const filteredContacts = createReducer('', {
    [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
    contacts,
    filteredContacts,
});

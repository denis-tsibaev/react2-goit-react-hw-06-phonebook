import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contactList/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const deleteContact = createAction('contactList/delete', contactId => ({
    payload: contactId,
}));

const filterContacts = createAction('contactList/filter', contact => ({
    payload: contact,
}));

export { addContact, deleteContact, filterContacts };

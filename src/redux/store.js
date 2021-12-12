import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // contactForm,
        // filter,
    },
    contacts: {
        items: [],
        filter: '',
    },
});

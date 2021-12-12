import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';

const App = () => {
    const [contacts, setContacts] = useState(
        JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    );

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const [filter, setFilter] = useState('');

    const addContact = (name, number) => {
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };
        if (!name || !number) {
            toast.error('Invalid name or number value!');
        }

        const doubleContact = contacts.find(
            contact => contact.name === newContact.name,
        );

        !doubleContact
            ? setContacts([newContact, ...contacts])
            : toast.error(`${name} is already in contacts`);
    };

    const findName = event => setFilter(event.target.value);

    const getFilteredContacts = () => {
        const normalizedFilteredName = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilteredName),
        );
    };

    const removeContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    return (
        <div className="appDiv">
            <Section title="Phonebook">
                <ContactForm onSubmit={addContact} />
            </Section>
            <Section>
                <Filter onFilterChange={findName} value={filter} />
            </Section>
            <Section title="Contacts">
                <ContactList
                    contacts={getFilteredContacts()}
                    onDeleteContact={removeContact}
                />
            </Section>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default App;

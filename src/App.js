import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import { deleteContact, filterContacts } from './redux/actions';
import { getFilteredContacts, getFilter } from './redux/selectors';

const App = () => {
    const contacts = useSelector(getFilteredContacts);
    const filteredContacts = useSelector(getFilter);
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(deleteContact(id));
    const findName = event => dispatch(filterContacts(event.target.value));

    return (
        <div className="appDiv">
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter onFilterChange={findName} value={filteredContacts} />
                <ContactList
                    contacts={contacts}
                    onDeleteContact={onDeleteContact}
                />
            </Section>
        </div>
    );
};

export default App;

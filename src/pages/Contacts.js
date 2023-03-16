import ContactList from 'components/contact-list';
import Filter from 'components/filter';
import { ContactForm } from '../components/contact-form/ContactForm';


const Contacts = () => {
  return (
      <>
          <h1>Phonebook</h1>
          <ContactForm></ContactForm>
          <h2>Contacts</h2>
          <Filter></Filter>
          <ContactList></ContactList>
    </>
  );
};

export default Contacts;

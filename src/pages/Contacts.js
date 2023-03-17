import ContactList from 'components/contact-list';
import Filter from 'components/filter';
import { ContactForm } from '../components/contact-form/ContactForm';
import {Heading} from "@chakra-ui/react"


const Contacts = () => {
  return (
      <>
          <Heading as='h4' size='md' mt={5} mb={5}>Phonebook</Heading>
          <ContactForm></ContactForm>
          <Heading as='h5' size='sm'>Contacts</Heading>
          <Filter></Filter>
          <ContactList></ContactList>
    </>
  );
};

export default Contacts;

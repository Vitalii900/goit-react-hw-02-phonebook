import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      const prevContacts = prevState.contacts;
      const contactId = nanoid();
      return {
        contacts: [
          ...prevContacts,
          { id: contactId, name: data.name, number: data.number },
        ],
      };
    });
  };

  handleFilterInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterInput}></Filter>
        {contacts.length !== 0 && (
          <ContactList filter={filter} contacts={contacts}></ContactList>
        )}
      </div>
    );
  }
}

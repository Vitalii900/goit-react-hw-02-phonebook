import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contact } from './Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState({ [name]: value });
  };

  addNewContact = event => {
    event.preventDefault();
    this.setState(prevState => {
      const prevContacts = prevState.contacts;
      const contactId = nanoid();
      return {
        contacts: [
          ...prevContacts,
          { id: contactId, name: this.state.name, number: this.state.number },
        ],
      };
    });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.addNewContact}>
            <label>
              Name
              <input
                onChange={this.handleInputChange}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              Number
              <input
                onChange={this.handleInputChange}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          {this.state.contacts.length !== 0 && (
            <ul>
              {this.state.contacts.map(contact => {
                return (
                  <Contact
                    key={contact.id}
                    name={contact.name}
                    tel={contact.number}
                  ></Contact>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

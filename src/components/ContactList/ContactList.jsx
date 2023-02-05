import { Contact } from './Contact'

export function ContactList({ filter, contacts }) {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            tel={contact.number}
          ></Contact>
        );
      })}
    </ul>
  );
}

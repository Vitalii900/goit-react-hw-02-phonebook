import '../ContactList/ContactList.css';

export function ContactList({ filter, contacts, deleteContact }) {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className='list'>
      {visibleContacts.map(contact => {
        return (
          <li className='item' key={contact.id}>
            <p className='contact'>
              {contact.name}: {contact.number}
            </p>
            <button className='deleteButton' onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

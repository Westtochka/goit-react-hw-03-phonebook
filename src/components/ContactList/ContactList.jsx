import {ContactItem} from '../ContactItem/ContactItem'
import { List } from "./ContactList.style";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
  
  export default ContactList;

  ContactList.propTypes = {contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

  
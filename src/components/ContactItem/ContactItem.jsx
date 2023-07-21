import { ListItem,ContactData, Button  } from "./ContactItem.style";

export const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };
  return (
    <ListItem>
      <ContactData>{contact.name}: {contact.number}</ContactData>
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};

export default ContactItem;

  
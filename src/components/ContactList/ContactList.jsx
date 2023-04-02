import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getFilterValue, getContacts} from '../../redux/selectors';
import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactList = () => {  
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

   const getFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };
  const filteredContacts = getFilteredContacts();   

  return (    
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}  
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
    
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};


import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from "../../redux/selectors";
import { FirstTitle, FormStyled } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    };
  };

  const  handleSubmit = evt =>{
   evt.preventDefault();  
     const newContact = contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() ===
        evt.currentTarget.name.value.toLocaleLowerCase()
    );

    if (newContact) {
      return alert(`${evt.currentTarget.name.value} is already in contacs.`);
    }

    dispatch(addContact({ name, number }));
   
    resetForm(); 
   };  
 
  
 const resetForm = () => {       
    setName('');
    setNumber('');    
  };

   return (
     <FormStyled onSubmit={handleSubmit}>
       <FirstTitle>Phonebook</FirstTitle>
       <div>
         <label>Name</label><br />
         <input
           type="text"
           value={name}
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required onChange={handleChange} />
         <br />
         <br />
         <label>Number</label><br />
         <input
           type="tel"
           value={number}
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required onChange={handleChange} />
         <br />
         <br />
         <div>
           <button type='submit'>Add contact</button>
         </div>
       </div>
     </FormStyled>
   );
};


ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};





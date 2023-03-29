import { useState } from "react";
import PropTypes from 'prop-types';
import { FirstTitle, FormStyled } from './ContactForm.styled';

 function Form({ onSubmit}) {
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
   const contact = { name: name, number: number }; 
   onSubmit(contact, resetForm);  
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

//  class Form extends Component{
//    state = {
//     name: '',
//     number: ''
//   };  
  
//    nameInputId = nanoid();
//    numberInputId = nanoid();

//    handleChange = evt => {
//       const { name, value } = evt.currentTarget;
//       this.setState({ [name]: value });
//    };

//    handleSubmit = evt =>{
//      evt.preventDefault();   
//      this.props.onSubmit(this.state, this.resetForm);
//    };

//    resetForm = () => {       
//      this.setState({ name: '', number: '' });     
//   };

//    render() {
//     return (
//       <FormStyled onSubmit={this.handleSubmit}>
//        <FirstTitle>Phonebook</FirstTitle>
//         <div>
//          <label htmlFor={this.nameInputId}>Name</label><br/>       
//           <input         
//           type="text"
//           value={this.state.name}
//           name="name"
//           id={this.nameInputId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required onChange={this.handleChange} /> 
//           <br />  
//           <br />       
//          <label htmlFor={this.numberInputId}>Number</label><br/>       
//           <input          
//           type="tel"
//           value={this.state.number}
//           name="number"
//           id={this.numberInputId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required onChange={this.handleChange} />  
//           <br />  
//           <br />  
//         <div>
//          <button type='submit'>Add contact</button>
//         </div>
//        </div>
//       </FormStyled>
//     )
//   }
// };

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default Form;
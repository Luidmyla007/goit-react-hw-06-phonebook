import { useState, useEffect } from 'react';
import { nanoid } from "nanoid"; 
import { GlobalStyle } from './GlobalStyles';
import { Container } from './App.styled';
import { ContactStyled } from './App.styled';
import Form from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);

    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data, resetForm) => {
    const { name, number } = data;  
    const newContact = contacts.find(contact => contact.name === name);

    if (newContact) {
      return alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

     setContacts(contacts => [...contacts, newContact]);
      resetForm();
    };
  };

  const deleteContact = contactId => {
    setContacts(contacts => 
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const getContact = () =>{     
       return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );    
  };
 
  const onFilterChange = event => {      
    setFilter(event.currentTarget.value);
  };  
  
     return (
     <Container>
         <GlobalStyle/>        
        <Form onSubmit={formSubmitHandler} />        
        <ContactStyled>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={onFilterChange}/>
          <ContactList
            contacts={getContact()}
            onDeleteContact={deleteContact}            
          />          
        </ContactStyled>
     </Container>
    );
  

};



// export class App extends Component {
//   state = {
//     contacts: [],
//      filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts);
//       this.setState({ contacts: parsedContacts });
//       return;
//     }
//     this.setState({ contacts: [] });    
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }  
// }

// formSubmitHandler = (data, resetForm) => {
//     const { name, number } = data;
//     const { contacts } = this.state;
//     const newContact = contacts.find(contact => contact.name === name);

//     if (newContact) {
//       return alert(`${name} is already in contacts`);
//     } else {
//       const contact = {
//         id: nanoid(),
//         name: name,
//         number: number,
//       };

//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//       resetForm();
//     }
//   };
  


//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//     getContact = () =>{
//        const { filter, contacts } = this.state;  
//        return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );    
//   };


//   onFilterChange = event => {
//       const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//      const { filter} = this.state;
//      const searchContacts = this.getContact();
//      return (
//      <Container>
//          <GlobalStyle/>        
//         <Form onSubmit={this.formSubmitHandler} />        
//         <ContactStyled>
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.onFilterChange}/>
//           <ContactList
//             contacts={searchContacts}
//             onDeleteContact={this.deleteContact}            
//           />          
//         </ContactStyled>
//      </Container>
//     );
//   };
// };

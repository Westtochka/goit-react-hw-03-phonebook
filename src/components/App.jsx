import { Component } from 'react'
import { ContactTitle } from "../components/ContactTitle/ContactTitle";
import {ContactForm} from "./ContactForm/ContactForm";
import ContactList from '../components/ContactList/ContactList';
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';
import { Section, H2 } from "./App.style";

class App extends Component { 
  state = {
    contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
  }

  createUser = (data) => {
  const { name, number } = data;
  const noRepeat = this.state.contacts.some((contact) => contact.name === name);

  if (noRepeat) {
    alert(`${name} is already in contacts` );
  } else {
    const newUser = {
      id: nanoid(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newUser],
    }));
  }
};
  changeFilter=e=>{
this.setState({filter:e.currentTarget.value})


  } 
   componentDidUpdate(prevProps, prevState){
console.log('app componentDidUpdate')

console.log(prevState)
console.log(this.state.contacts)
if(this.state.contacts!==prevState.contacts){
  console.log('contacts обновились')
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}}  
componentDidMount(){
  const contacts= localStorage.getItem('contacts')
  const contactsParse=JSON.parse(contacts)
  this.setState({contacts: contactsParse});
}
 
      render() {
      const normalizedFilter = this.state.filter.toLowerCase();
      const visibleContacts = this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      
      return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
            <Section>
            <ContactTitle title={'Phonebook'}/>
            <ContactForm createUser={this.createUser}/>
            <H2>Contacts</H2>
            <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
            <Filter filter={this.state.filter} onChange={this.changeFilter}
              /> 
          </Section>
          </div>
          )
      }      
      }
      export default App
      



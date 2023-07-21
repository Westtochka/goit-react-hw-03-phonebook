import { Component } from 'react'
import { FORM, Label, Input, Button} from "./ContactForm.style";
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange=({target:{name,value}})=>
  {this.setState({[name]:value})}  
 
  handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.createUser({ name, number });
    this.reset();
  };
    
  reset=()=>{
  this.setState({
    name: '',
    number: ''
  })
}


render(){
    return (
<FORM onSubmit={this.handlerSubmit}>
    <Label> Name  
  <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={this.state.name}
  onChange={this.handleChange}
/></Label>
<Label> Number 
<Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChange}
  value={this.state.number}
/></Label>

<Button type="submit"  disabled={!this.state.name||!this.state.number} >Add contact</Button>

  </FORM>)
}};

ContactForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};
import { Component } from "react"
import FilterName from "./components/FilterName/FilterName"
import UserList from "./components/UserList/UserList"
import ContactForm from "./components/ContactForm/ContactForm"

import "./App.css"

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChangeInput = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  handleDeleteContact = (contactsId) => {
    this.setState({
      contacts: this.state.contacts.filter(({id}) => {
        return id !== contactsId
      })
    })
  }

  render() {

    const { contacts, filter } = this.state

    const filteredConstacts = contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm />

        {/* <ul>
          <li>
            <p>Name</p>
            <input name="name"
              type="text"   
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
              required 
            />
          </li>

          <li>
            <p>Number</p>
            <input 
              name="number" 
              type="tel" 
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
              required 
            />
          </li>

          <button type="submit">Add contact</button>
        </ul> */}

        <h1>Contacts</h1>

        <FilterName value={filter} onFilter={this.handleChangeInput} />

        {/* <p>Find contacts by name</p> */}
        {/* <input type="text" onChange={this.handleChangeInput} value={filter} /> */}

        <UserList contacts={filteredConstacts} handleDeleteContact={this.handleDeleteContact} filtered={filteredConstacts} />

        {/* <ul>
          {filteredConstacts.map((contacts) => {
            return (
              <li key={contacts.id}>
                <p>{contacts.name}</p>
                <p>{contacts.number}</p>
              </li>
            )
          })}
        </ul> */}
      </>
    )
  }
}

export default App

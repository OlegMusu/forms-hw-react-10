import { Component } from "react";
import CreateNameStyled from "./CreateContactsCss/CreateNameStyled";
import CreateNumberStyled from "./CreateContactsCss/CreateNumberStyled";
import CreateNavStyled from "./CreateContactsCss/CreateNavStyled";
import CreateButtonStyled from "./CreateContactsCss/CreateButtonStyled";

class ContactForm extends Component {

    render() {
        return (
            <>
                <CreateNavStyled>
                    <li>
                        <CreateNameStyled>Name</CreateNameStyled>
                        <input name="name"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </li>

                    <li>
                        <CreateNumberStyled>Number</CreateNumberStyled>
                        <input
                            name="number"
                            type="tel"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </li>

                    <li>
                        <CreateButtonStyled type="submit">Add contact</CreateButtonStyled>
                    </li>
                </CreateNavStyled>
            </>
        )
    }
}

export default ContactForm;
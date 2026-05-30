import { Component } from "react";
import CreateNameStyled from "./CreateContactsCss/CreateNameStyled";
import CreateNumberStyled from "./CreateContactsCss/CreateNumberStyled";
import CreateNavStyled from "./CreateContactsCss/CreateNavStyled";
import CreateButtonStyled from "./CreateContactsCss/CreateButtonStyled";

class ContactForm extends Component {

    render() {

        const { name, handleChange, handleSubmit } = this.props

        return (
            <>
                <CreateNavStyled onSubmit={handleSubmit}>
                    <li>
                        <CreateNameStyled>Name</CreateNameStyled>
                        <label>
                            <input
                                onChange={handleChange}
                                value={name}
                                name="name"
                                type="text"
                            />
                        </label>
                    </li>

                    <li>
                        <CreateNumberStyled>Number</CreateNumberStyled>
                        <label>
                            <input
                                name="number"
                                type="tel"
                            />
                        </label>
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
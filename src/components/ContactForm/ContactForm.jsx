import { Component } from "react";
import CreateNameStyled from "./CreateContactsCss/CreateNameStyled";
import CreateNumberStyled from "./CreateContactsCss/CreateNumberStyled";
import CreateNavStyled from "./CreateContactsCss/CreateNavStyled";
import CreateButtonStyled from "./CreateContactsCss/CreateButtonStyled";

class ContactForm extends Component {

    render() {

        const { name, number, handleChange, handleSubmit } = this.props

        return (
            <>
                <CreateNavStyled onSubmit={handleSubmit}>
                    <label>
                        <CreateNameStyled>Name</CreateNameStyled>
                        <input
                            onChange={handleChange}
                            value={name}
                            name="name"
                            type="text"
                        />
                    </label>
                    <br />

                    <label>
                        <CreateNumberStyled>Number</CreateNumberStyled>
                        <input
                            onChange={handleChange}
                            value={number}
                            name="number"
                            type="tel"
                        />
                    </label>
                    <br />
                    <CreateButtonStyled type="submit">Add contact</CreateButtonStyled>
                </CreateNavStyled>
            </>
        )
    }
}

export default ContactForm;
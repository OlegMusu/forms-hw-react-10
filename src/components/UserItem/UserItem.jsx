import { Component } from "react";
import ContactsItemStyled from "./ContactsItem/ContactsItemStyled";
import ContactsNameStyled from "./ContactsItem/ContactsNameStyled";
import ContactsNumberStyled from "./ContactsItem/ContactsNumberStyled";
import ContactsButtonStyled from "./ContactsItem/ContactsButtonStyled";

class UserItem extends Component {
    render() {

        const { name, number, id, handleDeleteContact } = this.props

        return (
            <>
                <ContactsItemStyled>
                    <ContactsNameStyled>{name}:</ContactsNameStyled>
                    <ContactsNumberStyled>{number}</ContactsNumberStyled>
                    <ContactsButtonStyled type="button" onClick={() => handleDeleteContact(id)}>
                        Delete
                    </ContactsButtonStyled>
                </ContactsItemStyled>
            </>
        )
    }
}

export default UserItem;
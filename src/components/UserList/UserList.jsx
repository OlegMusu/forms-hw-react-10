import { Component } from "react";
import UserItem from "../UserItem/UserItem";

class UserList extends Component {

    render() {

        const { name, number, handleDeleteContact } = this.props

        return (
            <>
                return (
                <li>
                    {name}: {number} <button onClick={() => handleDeleteContact(id)}>Delete</button>
                </li>
                )
            </>
        )
    }
}

export default UserList;
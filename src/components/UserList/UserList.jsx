import { Component } from "react";
import UserItem from "../UserItem/UserItem";

class UserList extends Component {

    render() {

        const { filtered, handleDeleteContact } = this.props

        return (
            <>
                <ul>
                    {filtered.map(({name, number, id}) => {
                        return (
                            <UserItem key={id} id={id} name={name} number={number} handleDeleteContact={handleDeleteContact} />
                            // <li key={contacts.id}>
                            //     <p>{contacts.name}</p>
                            //     <p>{contacts.number}</p>
                            // </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default UserList;
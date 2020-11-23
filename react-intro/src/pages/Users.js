import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const users = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
];


const Users = () => {

    return (
        <React.Fragment>
            <Header title="Home" />
            <ul>
                {
                    users.map( user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                }
            </ul>
            <Footer />
        </React.Fragment>
    );

};

export default Users;
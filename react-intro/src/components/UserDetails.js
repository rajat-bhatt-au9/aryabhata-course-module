import React from 'react';
import users from '../dummyData/users';
import Header from './Header';

const UserDetails = (props) => {

    
    const userId = props.match.params.user_id;
    const userDetails = users.filter(user => user.id === parseInt(userId,10))[0];
    console.log(props);
    return (
        <React.Fragment>
            <Header title={userDetails.name} />
            <div>
                <p>
                {userDetails.description}
                </p>
            </div>    
        </React.Fragment>
    )

};

export default UserDetails;

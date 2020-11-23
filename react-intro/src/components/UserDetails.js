import users from '../dummyData/users';

const UserDetails = (props) => {

    
    const userId = props.match.params.user_id;
    const userDetails = users.filter(user => user.id === parseInt(userId,10))[0];
    console.log(props);
    return (
        <div>
            <h1>{userDetails.name}</h1>
            <div>
                <p>
                {userDetails.description}
                </p>
            </div>
        </div>
    )

};

export default UserDetails;

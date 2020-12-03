import React from 'react';
class Profile extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user: {
                userData: {}
            }
        }
    }
    
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.setState({
                user: user
            });
        } else {
            localStorage.removeItem('user')
            this.props.history.push('/')
        }
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h1>User Profile</h1>
                <div>
                    <label>Name: </label>
                    <label>{this.state.user.userData.name}</label>
                </div>
                <div>
                    <label>Email: </label>
                    <label>{this.state.user.userData.email}</label>
                </div>
            </div>
        );
    }
}

export default Profile;

import React from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import googleConfig from '../config/google.json';

class Layout extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    componentDidMount() {
        const user = localStorage.getItem('user');
        if(user) {
            this.setState({
                isLoggedIn: true
            });
        }
    }

    googleCallback = (response) => {
        if(!response || !response.accessToken) {
            alert("Sorry, Google signin has failed. Please try again");
            return;
        }
        const user = {
            token: response.accessToken,
            userData: response.profileObj
        }
        localStorage.setItem('user',JSON.stringify(user));
        this.setState({
            isLoggedIn: true
        });
    }

    logout = () => {
        localStorage.removeItem('user');
        this.setState({
            isLoggedIn: false
        });
    }

    render(){
        return (
            <>
                <div className="topnav">
                    <Link className={'active'} to={'/'}>Videos</Link>
                    <div style={{float:'right'}}>
                        {
                            this.state.isLoggedIn &&
                            <>
                            <Link to={'/profile'}>Profile</Link>
                            <button onClick={this.logout}>Logout</button>
                            </>
                        }
                        {
                            !this.state.isLoggedIn &&
                            <GoogleLogin 
                                clientId={googleConfig.clientId}
                                onSuccess={this.googleCallback}
                                onFailure={this.googleCallback}
                                buttonText="Login"
                            />
                        }
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Layout;

import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Home from "../pages/Home";
import Information from "../pages/Information";
import Users from '../pages/Users';
import UserDetails from './UserDetails';

const FourZeroFour = (props) => {
    console.log('FourZeroFour',props)
    // props.history.push('/');
    return (
        <Link to={'/'}><div>No Page Found</div> Go Back to home</Link>
    );
};

const Routes = () => {
    return (
        <Switch>
            <Route path="/info" exact component={Information} />
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:user_id" exact component={UserDetails} />
            <Route path="*" component={FourZeroFour} />
        </Switch>
    );
};

export default Routes;

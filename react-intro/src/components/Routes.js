import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Information from "../pages/Information";

const Routes = () => {
    return (
        <Switch>
            <Route path="/info" exact component={Information} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
};

export default Routes;

import { Link } from 'react-router-dom';
import './Layout.css';
const Layout = (props) => {
    return (
        <>
            <ul>
                <li className="nav-li"><Link to={"/"}>Home</Link></li>
                <li className="nav-li"><Link to={"/todos"}>Task List</Link></li>
            </ul>
            {props.children}
        </>
    )
};

export default Layout;
import User from './User';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <div className="main-header">
            <h1>
                <NavLink className="app-title" to="/">
                    <b>toDo</b>App
                </NavLink>
            </h1>
            <User />
        </div>
    );
}

export default Header;
import User from './User';

function Header() {
    return(
        <div className="main-header">
            <h1 className="app-title">
                <b>toDo</b>App
            </h1>
            <User />
        </div>
    );
}

export default Header;
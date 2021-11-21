import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function User() {
    return(
        <div className="user-info">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            <span className="user-name">Hello User</span>
        </div>
    );
}

export default User;
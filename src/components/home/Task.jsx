import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Task({task, handleCompleteButtonClick}) {
    const handleButtonClick = (e) => {
        e.preventDefault();
        handleCompleteButtonClick(task.id);
    }

    return (
        <tr>
            <NavLink to={`/task/${task.id}`} className="task-row">
                <td className="task-title">{task.title}</td>
                <td className="complete-button">
                    <Button variant="outline-success" onClick={handleButtonClick}>Complete!</Button>
                </td>
            </NavLink>
        </tr>
    )
}

export default Task;
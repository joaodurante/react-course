import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Task({task, handleCompleteButtonClick}) {
    const history = useHistory();

    const handleButtonClick = (e) => {
        e.preventDefault();
        handleCompleteButtonClick(task.id);
    }

    const handleRowClick = () => {
        history.push(`/task/${task.id}`);
    }

    return (
        <tr className="task-row" onClick={handleRowClick}>
            <td className="task-title">{task.title}</td>
            <td className="complete-button">
                <Button variant="outline-success" onClick={handleButtonClick}>Complete!</Button>
            </td>
        </tr>
    )
}

export default Task;
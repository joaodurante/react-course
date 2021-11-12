import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Task(props) {
    const handleCompleteButtonClick = (e) => {
        e.preventDefault();
        props.handleCompleteButtonClick(props.task.id);
    }

    return (
        <tr>
            <td className="task-description">{props.task.description}</td>
            <td className="complete-button">
                <Button variant="outline-success" onClick={handleCompleteButtonClick}>Complete Task</Button>
            </td>
        </tr>
    )
}

export default Task;
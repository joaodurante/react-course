import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Task(props) {
    const handleCompleteButtonClick = (e) => {
        e.preventDefault();
        props.handleCompleteButtonClick(props.task.id);
    }

    return (
        <tr>
            <td>{props.task.description}</td>
            <td>
                <Button variant="light" onClick={handleCompleteButtonClick}>Complete Task</Button>
            </td>
        </tr>
    )
}

export default Task;
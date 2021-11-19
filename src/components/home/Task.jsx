import Button from 'react-bootstrap/Button';

function Task({task, handleCompleteButtonClick}) {
    const handleButtonClick = (e) => {
        e.preventDefault();
        handleCompleteButtonClick(task.id);
    }

    return (
        <tr>
            <td className="task-description">{task.description}</td>
            <td className="complete-button">
                <Button variant="outline-success" onClick={handleButtonClick}>Complete Task</Button>
            </td>
        </tr>
    )
}

export default Task;
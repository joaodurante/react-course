import Button from 'react-bootstrap/Button';

function TaskDetails({task}) {

    return(
        <div className="container task-details-container">
            <Button variant="dark">
                Return!
            </Button>
            <div className="task-details">
                <h1>Task title</h1>
                <h5>Task description</h5>
                <div className="task-details-buttons">
                    <Button type="button" className="details-button" variant="outline-dark">Complete task!</Button>
                    <Button type="button" className="details-button" variant="outline-dark">Delete task!</Button>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;
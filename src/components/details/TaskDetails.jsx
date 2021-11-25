import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import './Details.css';

function TaskDetails({tasks, handleCompleteButtonClick, handleDeleteButtonClick}) {
    const params = useParams();
    const history = useHistory();
    const task = tasks.find(task => task.id == params.id);

    const handleReturnClick = () => {
        history.push('/');
    }

    const handleCompleteClick = () => {
        handleDeleteButtonClick(task.id);
        history.push('/');
    }

    const handleDeleteClick = () => {
        handleCompleteButtonClick(task.id);
        history.push('/');
    }

    if(task !== undefined) {
        return(
            <div className="container">
                <span className="return-button" onClick={handleReturnClick}>&#129168; Return</span>
                <div className="task-details">
                    <h1>{task.title}</h1>
                    <h5>{task.description}</h5>
                    <div className="task-details-buttons">
                        <Button type="button" className="details-button" variant="outline-dark" onClick={handleCompleteClick}>Complete task!</Button>
                        <Button type="button" className="details-button" variant="outline-dark" onClick={handleDeleteClick}>Delete task!</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container">
                <a className="return-button" onClick={handleReturnClick}>&#129168; Return</a>
                <div className="task-details">
                    <h1>Task not found!</h1>
                </div>
            </div>
        );
    }
}

export default TaskDetails;
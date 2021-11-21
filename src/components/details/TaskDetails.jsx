import Button from 'react-bootstrap/Button';
import { NavLink, useParams } from 'react-router-dom';
import './Details.css';

function TaskDetails({tasks, handleCompleteButtonClick, handleDeleteButtonClick}) {
    const params = useParams();
    const task = tasks.find(task => task.id == params.id);

    if(task !== undefined) {
        return(
            <div className="container">
                <span className="return-button">&#129168; Return</span>
                <div className="task-details">
                    <h1>{task.title}</h1>
                    <h5>{task.description}</h5>
                    <div className="task-details-buttons">
                        <Button type="button" className="details-button" variant="outline-dark" onClick={() => handleCompleteButtonClick(task.id)}>Complete task!</Button>
                        <Button type="button" className="details-button" variant="outline-dark" onClick={() => handleDeleteButtonClick(task.id)}>Delete task!</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container">
                <NavLink to="/" className="return-button"><span>&#129168; Return</span></NavLink>
                <div className="task-details">
                    <h1>Task not found!</h1>
                </div>
            </div>
        );
    }
}

export default TaskDetails;
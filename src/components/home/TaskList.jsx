import Table from 'react-bootstrap/Table';
import Task from './Task';
import './Home.css';

function TaskList({tasks, handleCompleteButtonClick}) {
    return(
        <Table className="task-list" hover>
            <tbody>
                {
                    tasks.map(task => {
                        console.log(task)
                        return <Task key={task.id} task={task} handleCompleteButtonClick={handleCompleteButtonClick} />
                    })
                }
            </tbody>
        </Table>
    )
}

export default TaskList;
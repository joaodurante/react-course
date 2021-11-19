import Table from 'react-bootstrap/Table';
import Task from './Task';

function TaskList(props) {
    return(
        <Table className="task-list" hover>
            <tbody>
                {
                    props.tasks.map(task => {
                        return <Task key={task.id} task={task} handleCompleteButtonClick={props.handleCompleteButtonClick} />
                    })
                }
            </tbody>
        </Table>
    )
}

export default TaskList;
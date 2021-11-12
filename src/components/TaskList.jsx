import Table from 'react-bootstrap/Table';
import Task from './Task';

function TaskList(props) {
    return(
        <Table hover>
            <tbody>
                {
                    props.tasks.map(task => {
                        if(task.done === false) {
                            return <Task key={task.id} task={task} handleCompleteButtonClick={props.handleCompleteButtonClick} />
                        }
                    })
                }
            </tbody>
        </Table>
    )
}

export default TaskList;
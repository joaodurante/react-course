import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TaskForm(props) {
    const [task, setTask] = useState({description: '', done: false});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.handleNewTask(task);
        setTask({description: '', done: false});
    }

    const handleInputTaskChange = (e) => {
        setTask({...task, description: e.target.value});
    }

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>New task</Form.Label>
                <Form.Control type="text" autoComplete="off" placeholder="Enter your task description" value={task.description} onChange={handleInputTaskChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create task!
            </Button>
        </Form>
    )
}

export default TaskForm;
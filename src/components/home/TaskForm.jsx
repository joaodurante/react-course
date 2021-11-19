import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TaskForm({handleNewTask}) {
    const [task, setTask] = useState('');
    const [validated, setValidated] = useState(false);

    const handleFormSubmit = (e) => {
        const form = e.currentTarget;
        if(form.checkValidity() === true) {
            handleNewTask(task);
            setTask('');
            setValidated(false);
        } else {
            setValidated(true);
        }
        e.preventDefault();
    }

    const handleInputTaskChange = (e) => {
        setTask(e.target.value);
    }

    return(
        <Form noValidate validated={validated} className="task-form" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="taskInput">
                <Form.Label>New task</Form.Label>
                <Form.Control type="text" autoComplete="off" placeholder="Enter your task title" value={task} onChange={handleInputTaskChange} required/>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid task title
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionInput">
                <Form.Control as="textarea" rows={3} placeholder="Enter your task description" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Create task!
            </Button>
        </Form>
    )
}

export default TaskForm;
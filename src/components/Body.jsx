import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Body() {
    const [tasks, setTasks] = useState([]);
    const [doneTasksCounter, setDoneTasksCounter] = useState(0);

    const handleNewTask = (task) => {
        setTasks(prevState => [...prevState, {id: tasks.length, ...task}]);
    }
  
    const handleCompleteButtonClick = (taskId) => {
        setTasks(prevState => {
            prevState[taskId] = {...prevState[taskId], done: true};
            return prevState;
        });
        setDoneTasksCounter(prevState => prevState + 1);
    }

    return(
        <div className="container">
            <TaskForm handleNewTask={handleNewTask}/>
            <TaskList tasks={tasks} handleCompleteButtonClick={handleCompleteButtonClick}></TaskList>  
        </div>
    );
}

export default Body;
import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Body() {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [tasksCounter, setTasksCounter] = useState(0);

    const handleNewTask = (task) => {
        setTasks(prevState => [...prevState, {id: tasksCounter, description: task}]);
        setTasksCounter(prevState => ++ prevState);
    }
  
    const handleCompleteButtonClick = (taskId) => {
        setTasks(prevState => {
            let tempState = [...prevState];
            let index = tasks.map(task => task.id).indexOf(taskId);
            tempState.splice(index, 1);
            return tempState;
        });

        setDoneTasks(prevState => {
            let task = tasks.find(task => task.id === taskId);
            return [...prevState, task];
        });
    }

    return(
        <div className="container">
            <TaskForm handleNewTask={handleNewTask}/>
            <TaskList tasks={tasks} handleCompleteButtonClick={handleCompleteButtonClick}></TaskList>  
        </div>
    );
}

export default Body;
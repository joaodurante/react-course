import { useState } from 'react';
import Home from './home/Home';

function Main() {
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

    const handleDeleteButtonClick = (taskId) => {
        setTasks(prevState => {
            let tempState = [...prevState];
            let index = tasks.map(task => task.id).indexOf(taskId);
            tempState.splice(index, 1);
            return tempState;
        });
    }

    return(
        <div className="container">
            <Home 
                tasks={tasks} 
                handleNewTask={handleNewTask} 
                handleCompleteButtonClick={handleCompleteButtonClick}
            />
        </div>
    );
}

export default Main;
import { useState } from 'react';
import Home from './home/Home';
import TaskDetails from './details/TaskDetails';
import { Switch, Route } from 'react-router-dom';

function Main() {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [tasksCounter, setTasksCounter] = useState(0);

    const findTaskById = (taskId) => {
        return tasks.find(task => task.id === taskId);
    }

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
            let task = findTaskById(taskId);
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
            <Switch>
                <Route path="/" exact>
                    <Home tasks={tasks}
                        handleNewTask={handleNewTask}
                        handleCompleteButtonClick={handleCompleteButtonClick}/>
                </Route>
                <Route path="/task/:id">
                    <TaskDetails tasks={tasks} 
                        handleCompleteButtonClick={handleCompleteButtonClick}
                        handleDeleteButtonClick={handleDeleteButtonClick} />
                </Route>
            </Switch>

        </div>
    );
}

export default Main;
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Home({tasks, handleNewTask, handleCompleteButtonClick}) {
    return(
        <div className="container">
            <TaskForm handleNewTask={handleNewTask} />
            <TaskList tasks={tasks} handleCompleteButtonClick={handleCompleteButtonClick} />
        </div>
    );
}

export default Home;
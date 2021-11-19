import Header from './components/common/Header';
import Main from './components/Main';
import TaskDetails from './components/details/TaskDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <TaskDetails /> */}
    </div>
  );
}

export default App;

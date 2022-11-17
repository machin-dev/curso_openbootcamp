import logo from './logo.svg';
import './App.css';
import TaskListComponent from './componentes/container/task_list';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      
      <TaskListComponent />
    </div>
  );
}

export default App;

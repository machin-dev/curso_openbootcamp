
import './App.css';
import TaskListComponent from './componentes/container/task_list';
import 'bootstrap/dist/css/bootstrap.min.css';
import GreetingStyled from './componentes/pure/forms/greetingStyled';


function App() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center ">      
      <TaskListComponent />
      {/*<GreetingStyled name='Michel' />*/}
    </div>
  );
}

export default App;

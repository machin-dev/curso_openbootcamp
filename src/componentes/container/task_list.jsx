import React, { useEffect, useState } from "react";
import { Level } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";


const TaskListComponent = () =>{
    const defaultTask=new Task('example', 'Default description',false, Level.normal);
    const defaultTask2=new Task('example2', 'Default description2',true, Level.urgente);
    const [tasks, setTasks]=useState([defaultTask,defaultTask2]);
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        console.log('modificacion del componente');
        setLoading(false);
        return ()=> {
            console.log('unmount component');
        }
    },[tasks])

    const changeCompleted = (task) =>{      
        console.log('cambiar estado de la tarea a: '+ !task.completado);       
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks[index].completado=!tempTasks[index].completado;
        setTasks(tempTasks);        
    }
    const deleteTask =(task) =>{
      const index=tasks.indexOf(task);
      const tempTasks=[...tasks];
      console.log('antes de eliminar: '+tempTasks)
      tempTasks.splice(index,1);
      setTasks(tempTasks);
    }
    const insertTask=(task)=>{
      console.log(task);
      const tempTasks=[...tasks];
      tempTasks.push(task);
      setTasks(tempTasks);
    }

    return(
         <div className="col-12 d-flex">
            <div className="col-7">
                <div className="shadow w-100 ">
                     <h1 className="card-header text-center">Lista de Tareas</h1>
                     <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center">
                      {tasks.map((t,index)=>(
                        <TaskComponent 
                          task={t} 
                          completar={changeCompleted}
                          del={deleteTask} 
                          key={index}/>
                      ))}                       
                     </div>
                </div>
          </div>
          <div className="col-5">
            <TaskForm newTask={insertTask}/>
          </div>
        </div>
        
    );
};

export default TaskListComponent
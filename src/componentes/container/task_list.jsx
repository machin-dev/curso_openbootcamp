import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Level } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";


const TaskListComponent = () =>{
    const defaultTask=new Task('example', 'Default description',false, Level.normal);
    const defaultTask2=new Task('example2', 'Default description2',true, Level.urgente);
    const [tasks, setTasks]=useState(defaultTask);
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        console.log('modificacion del componente');
        setLoading(false);
        return ()=> {
            console.log('unmount component');
        }
    },[tasks])

    const changeCompleted = (id) =>{
        console.log('cambiar estado del componente');
    }

    return(
         <div className="col-12 d-flex">
            <div className="col-6">
                <div className="card w-100 ">
                     <h1 className="card-header">Lista de Tareas</h1>
                     <div className="card-body">
                       <TaskComponent task={defaultTask} />
                       <TaskComponent task={defaultTask2} />
                     </div>
                </div>
          </div>
          <div className="col-6">
            <TaskForm />
          </div>
        </div>
        
    );
};

export default TaskListComponent
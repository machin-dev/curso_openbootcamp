import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Level } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";


const TaskListComponent = () =>{
    const defaultTask=new Task('example', 'Default description',false, Level.normal);
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
         <div>
          <TaskComponent task={defaultTask} />
         </div>
    );
};

export default TaskListComponent
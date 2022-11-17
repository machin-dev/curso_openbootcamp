import React from "react";
import { Level } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/forms/task";


const TaskListComponent = () =>{
    const defaultTask=new Task('example', 'Default description',false, Level.normal);
    return(
         <div>
          <TaskComponent task={defaultTask} />
         </div>
    );
};

export default TaskListComponent
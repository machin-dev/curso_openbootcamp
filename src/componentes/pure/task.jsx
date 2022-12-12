import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import 'react-icons/fc'

import { Task } from "../../models/task.class";
import { FcAbout, FcApproval,  FcFullTrash,  FcOk,  FcSettings } from "react-icons/fc";
import { Level } from "../../models/level.enum";


const TaskComponent=({task})=>{
    useEffect(()=>{
        console.log('tarea creada');
        return()=>{
            console.log(`tarea ${task.name} desmontada`);
        }
    },[task]);

    function taskLevelBadge (){
          switch(task.nivel){
            case Level.normal:  return "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success";
            case Level.urgente: return "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger";
            case Level.bloqueado:return "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary";
            default:break;
          }
    }
    return (
        <div>
           <div className="card position-relative m-2" style={{width:'18rem'}}>
                 <div className="card-body">
                     <h5 className="card-title shadow-sm p-2"><FcAbout /> {task.name}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">
                        {task.completado ? (
                           <><FcOk /> COMPLETADO </>
                        ):(
                           <><FcSettings /> NO COMPLETADO </>
                        )}
                        <FcFullTrash className="m-2 ms-4" title="Eliminar"/>
                     </h6>
                     <p className="card-text">{task.descripcion}</p> 
                                        
                 </div>
                 <span className={taskLevelBadge()}>
                      {task.nivel }                      
                     <span className="visually-hidden">unread messages</span>
                </span>
            </div>
        </div>
    );
};

TaskComponent.propTypes={
    task: PropTypes.instanceOf(Task)
}; 

export default TaskComponent;

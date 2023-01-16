import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import 'react-icons/fc';


import { Task } from "../../models/task.class";
import { FcAbout,  FcFullTrash,  FcOk,  FcSettings } from "react-icons/fc";
import { Level } from "../../models/level.enum";


const TaskComponent=({task, completar, del})=>{
    useEffect(()=>{
        console.log('tarea creada');                
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
      
           <div className="card  m-2" style={{width:'18rem'}}>
                 <div className="card-body ">
                     <h5 className="card-title bg-dark text-light p-2 position-relative"><FcAbout />
                      {task.name}
                      <span className={taskLevelBadge()}>
                         {task.nivel }  
                      </span>
                </h5>
                     <button 
                        className={task.completado ? 'btn btn-success mb-2 text-white':
                                                     'btn btn-warning mb-2 text-light' }
                        title="click para cambiar estado"
                         onClick={()=>completar(task)}>
                        {task.completado ? (
                           <><FcOk /> FINALIZADO </>
                        ):(
                           <><FcSettings /> PENDIENTE </>
                        )}                        
                     </button> 
                     <div className="row">
                         <div className="col-9"><p className="card-text">{task.descripcion}</p></div>
                         <div className="col-3"><button className="btn" onClick={()=>del(task)}><FcFullTrash title="Eliminar" /></button></div>
                     </div>                    
                                                           
                 </div>                 
                 
            </div>
        
    );
};

TaskComponent.propTypes={
    task: PropTypes.instanceOf(Task).isRequired,
    completar: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
}; 

export default TaskComponent;

import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import 'react-icons/fc'

import { Task } from "../../models/task.class";
import { FcAbout, FcApproval,  FcSettings } from "react-icons/fc";


const TaskComponent=({task})=>{
    useEffect(()=>{
        console.log('tarea creada');
        return()=>{
            console.log(`tarea ${task.name} desmontada`);
        }
    },[task])
    return (
        <div>
           <div className="card position-relative" style={{width:'18rem'}}>
                 <div className="card-body">
                     <h5 className="card-title shadow-sm p-2"><FcAbout /> {task.name}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">
                        {task.completado ? (
                            <><FcApproval />'COMPLETADO' </>
                        ):(
                           <><FcSettings /> 'NO COMPLETADO' </>
                        )}
                     </h6>
                     <p className="card-text">{task.descripcion}</p>                     
                 </div>
                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {task.nivel}
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

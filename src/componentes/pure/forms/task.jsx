import React from "react";
import PropTypes from 'prop-types';
import 'react-icons/fc'

import { Task } from "../../../models/task.class";
import { FcAbout, FcCancel, FcCheckmark, FcHome } from "react-icons/fc";


const TaskComponent=({task})=>{
    return (
        <div>
           <div class="card position-relative" style={{width:'18rem'}}>
                 <div class="card-body">
                     <h5 class="card-title"><FcAbout /> {task.name}</h5>
                     <h6 class="card-subtitle mb-2 text-muted">
                        {task.completado ? (
                            <>'COMPLETADO' <FcCheckmark /></>
                        ):(
                           <><FcCancel /> 'NO COMPLETADO' </>
                        )}

                     </h6>
                     <p class="card-text">{task.descripcion}</p>                     
                 </div>
                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {task.nivel}
                     <span class="visually-hidden">unread messages</span>
                </span>
            </div>
        </div>
    );
};

TaskComponent.propTypes={
    task: PropTypes.instanceOf(Task)
}; 

export default TaskComponent;

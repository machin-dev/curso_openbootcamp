import { Level } from "../../../models/level.enum";
import { Task } from "../../../models/task.class";
import PropTypes from 'prop-types';
import { useRef } from "react";


const TaskForm =({newTask}) =>{     
     const nameRef=useRef('');
     const descRef=useRef('');
     const nivelRef=useRef(Level.normal);

     const createTask = (e) =>{
        e.preventDefault();
        let task=new Task(nameRef.current.value,descRef.current.value,false,nivelRef.current.value);        
        task.name ? newTask(task) : console.log('Tarea no valida');   
        nameRef.current.value='';     
    };
    return(
        <form className="m-4 p-3 border" onSubmit={createTask}>
           <h3 className="text-primary bg-light text-center shadow">Create a new Task</h3>
           <div className="input-group mb-3 ">
                 <span className="input-group-text">Name:</span>
                 <input type="text" className="form-control" ref={nameRef} placeholder="nombre" required autoFocus/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <input type="text" className="form-control" ref={descRef}placeholder="descripcion"/>
            </div>
            <div className="input-group mb-3">
             <span className="input-group-text">Priority:</span>
                <select ref={nivelRef} className="form-select">                     
                    <option value={Level.normal}> Normal</option> 
                    <option value={Level.bloqueado}>Locked</option> 
                    <option value={Level.urgente}> Urgent</option> 
                </select>             
            </div>
            <div className="text-center">
                <input type="submit" className="btn btn-primary" value="Crear" />
            </div>
        </form>
    );
}
TaskForm.propTypes={
    newTask: PropTypes.func.isRequired
}
export default TaskForm
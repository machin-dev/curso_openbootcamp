import { useState } from "react";
import { FcAnswers, FcCheckmark, FcQuestions } from "react-icons/fc";


const islogged ={
    color:'lightblue'
};
const unlogged ={
    color:'tomato',
    fontWeight: 'bold'
};
const GreetingStyled = (props)=>{
     const [logged, setLogged]=useState(false);
    return(
        <div style={logged ? islogged : unlogged}>
             
                {logged ?
                 (<p>Hola, {props.name}</p>)
                 :
                 (<p>Please Loguin</p>)}                
             
             <button className={logged ? 'btn btn-success' : 'btn btn-danger'} onClick={()=>{
                setLogged(!logged)
                console.log('boton click ejecutado')
                }}>
                {logged ? 'LogOut' : 'LogIn'}
             </button>
        </div>
    );
}
export default GreetingStyled
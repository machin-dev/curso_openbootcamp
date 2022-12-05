import { useState } from "react";


const RegisterForm =()=>{
    const initialData = [
        {
            user:'',
            password:'',
            email:'',
            name:''
        }
    ];
    const [data, setData]=useState(initialData);
    return( 
        <div>

        </div>
    );
}
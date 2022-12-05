

import React, { useEffect } from 'react';

const AllCycles = ()=>{
    useEffect(()=>{       
        const interval=setInterval(()=>{

               document.title= `${new Date()}`
               console.log('actualizacion del componente')
        },1000)
        return()=>{
        console.log('al desaparecer');
        document.title='Tiempo detenido';
        clearInterval(interval);
        }
    },[]);
    return(
        <div>

        </div>
    );
}

export default AllCycles;
import React, { Component, useEffect } from 'react';

 export class DidUpdate extends Component {
    componentDidMount(){
        console.log('cuando el componente recibe nuevos props o cambios en el estado')
    }
    render() {
        return (
            <div>
               <h1>DidUpdate</h1> 
            </div>
        );
    }
}

export const DidUpdateHook= ()=>{
    useEffect(()=>{
        console.log('cuando el componente se actuliza');
    });
    return(
        <div>
           <h1>DidUpdate</h1>
        </div>
    );
}
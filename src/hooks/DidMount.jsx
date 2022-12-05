/*
hook de ciclo de vida em componente funcion
*/

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('comportamiento antes de que el componente sea añadido al DOM')
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidmountHook =() =>{
    useEffect(()=>{
        console.log('comportamiento antes de que el componente sea añadido al DOM')
    },[]);
    return(
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
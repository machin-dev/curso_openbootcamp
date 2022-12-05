import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('antes de que el componenete desaparezca')
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
export const WillUnmountHook=()=>{
    useEffect(()=>{
        return()=>{
            console.log('antes de desmontar, con useeffect');
        };
    },[]);
    return(
    <div>
        <h1>WillUnmount</h1>
    </div>
    );
}


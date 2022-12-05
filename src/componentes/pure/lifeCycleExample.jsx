/**
 * ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo antes de pintarlo el componente')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillRecibeProps: cuando recibe props')
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;
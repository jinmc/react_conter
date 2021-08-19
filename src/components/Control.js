import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    onPlus: () => createWarning('onPlus'),
    onSubtract: () => createWarning('onSubtract'),
    onRandomizeColor: () => createWarning('onRandomizeColor'),
}

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

class Control extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
};


function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
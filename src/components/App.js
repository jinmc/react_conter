import React, { Component, PropTypes } from 'react';
import Control from './Control';
import Value from './Value'

const defaultProps = {

};

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <Value />
            <Control />
        </div>
        );
    }

}



export default App;
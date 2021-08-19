import React, { Component, PropTypes } from 'react';
import Control from './Control';
import Value from './Value'
import * as actions from '../actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const defaultProps = {

};

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <Value number={this.props.number}/>
            <Control
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
             />
        </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
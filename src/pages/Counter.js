import { increment, decrement, reset } from 'myRedux/actions/counter';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>当前基数为{this.props.count}</p>
                <button onClick={this.props.handleIncrement}>自增1</button>
                <button onClick={this.props.handleDecrement}>自减</button>
                <button onClick={this.props.handleReset}>重置</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = dispatch => ({
    handleDecrement: () => {
        dispatch(decrement())
    },
    handleIncrement: () => {
        dispatch(increment())
    },
    handleReset: () => {
        dispatch(reset())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
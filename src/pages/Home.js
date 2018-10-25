import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: ++prevState.count
            };
        });
    }

    render() {
        return (
            <div>
                <p>This is Home11</p>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default Home;
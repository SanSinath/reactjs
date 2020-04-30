import React, { Component } from 'react';

class Countdown extends Component {

    constructor(props){
        super(props);
        this.state = {value : props.value}
        var handle = setInterval(() => {

            if(this.state.value > 0)
                this.setState({value: this.state.value - 1});
            else
                clearInterval(handle);
        }, 1000)
    }

  
    render() {
        return (
            <div>
                {this.state.value}
            </div>
        );
    }
}

export default Countdown;
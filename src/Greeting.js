import React, { Component } from 'react';

export default class Greeting extends Component {
    render() {
        const {name, ...rest} = this.props;
        return (
            <div {...rest}>
                Welcome {name}
            </div>
        );
    }

    static defaultProps ={
        name: 'Cambodai'
    }

    // static propTypes = {
    //     name: this.propTypes.string
    // }

}
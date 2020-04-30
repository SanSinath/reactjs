import React, { Component } from 'react';

export default function test({name, ...rest}){

    return(
       <div>
           hello
       </div>
    )

}

export function test2({name, ...rest}){
    return(
       <div></div>
    )

}


// class Greeting extends Component {
//     render() {
//         const {name, ...rest} = this.props;
//         return (
//             <div {...rest}>
//                 Welcome {name}
//             </div>
//         );
//     }

//     static defaultProps ={
//         name: 'Cambodai'
//     }

//     // static propTypes = {
//     //     name: this.propTypes.string
//     // }

// }
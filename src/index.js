import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import Countdown from './Countdown';
import Test from './TestLife';

const num = [1,2,3,4];

class App extends React.Component {

   render() {
      return (
         <div>

            <Test/>

            {/* { num.map((n) => (
                 <li key={n}>{n}</li>
                ))
            } */}
             {/* <Countdown value = {20} />
             <Countdown value = {10} />
             hello
             <Greeting 
                style = {{color : 'blue', background : 'yellow'}}
                children ="tejrjre" 
                ClassName = 'Hello'
                title = "abc"
            /> */}
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
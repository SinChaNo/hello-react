import React, { Component } from 'react';
import IterationSample from './components/IterationSample';
import LifeCycleSample from './components/LIfeCycleSample';


class App extends Component {
  render() {
    return(
      <div>
        <LifeCycleSample />
      </div>
    );
  }
}

// const App = () => {
//   return <ScrollBox/>
// }

export default App;

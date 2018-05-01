import React from 'react';
import RHLTest from './RHLTest';
import SomethingElse from './SomethingElse';
//import {hot} from 'react-hot-loader';


class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <SomethingElse/>
      <RHLTest/>
    </div>);
  }
}

export default App;

/*
const App = () => (
  <div>
    <h2>Welcome to React!</h2>
    <SomethingElse/>
    <RHLTest/>
  </div>
);

export default hot(module)(App);
*/

import {hot} from 'react-hot-loader';
import RHLTest from '../containers/RHLTest';
import Introduction from './Introduction';

const App = () => (
  <div>
    <h2>React Hot Loader Quick Start</h2>
    <Introduction />
    <RHLTest />
  </div>
);

export default hot(module)(App);

import React, { Component } from 'react';
// import MainContainer from './MainContainer';
import * as actions from './actions/actions.js';
const App = () => {
  return (
<div>
  <button onClick={() => dispatchEvent(actions.defaultAction())}/>
</div>
  );
}
/* class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>HELLO WORLD!!!!</p>
    )
  }
} */

export default App;
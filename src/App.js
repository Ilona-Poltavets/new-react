import React, { Component } from "react";
import { Slide } from "react-awesome-reveal";

class App extends Component {
  render() {
    return (
      <Slide triggerOnce>
        <ul >
          <li> Item 1 </li>
          <li> Item 2 </li>
          <li> Item 3 </li>
          <li> Item 4 </li>
        </ul>
      </Slide>
    );
  }
}

export default App ;

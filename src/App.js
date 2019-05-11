import React, { Component } from 'react';
import Display from './Components/Display';
import Control from './Components/Control';
import Editor from './Components/Editor';
import './Css/App.css'

import TuringMachine from './Classes/TuringMachine';
import Program from './Classes/Program';
import { binaryAddition } from './Extras/example-programs';

class App extends Component {

  state = {
    TM: new TuringMachine(),
    program: new Program(),
    defaultCode: ''
  }

  componentDidMount() {
    this.setDefaultCode(binaryAddition, '11011#10110');
  }

  updateTM = async () => {
    const {TM} = this.state;
    this.setState({TM});
  }

  updateProgram = async () => {
    const {program} = this.state;
    this.setState({program});
  }

  setDefaultCode = (code, input) => {
    const {TM} = this.state; 
    TM.setInput(input);
    this.setState({defaultCode: code});
    this.updateTM();
  }

  render() {
    const {TM, program, defaultCode} = this.state;
    return (
      <div className='App'>
        <Display 
          TM={TM}
          updateTM={this.updateTM} 
        />
        <Control
          TM={TM}
          program={program} 
          updateTM={this.updateTM} 
          updateProgram={this.updateProgram} 
          onProgramSelection={this.setDefaultCode}
        />
        <Editor 
          defaultCode={defaultCode}
          TM={TM}
          program={program} 
          updateTM={this.updateTM} 
          updateProgram={this.updateProgram} 
        />
      </div>
    );
  }
}

export default App;

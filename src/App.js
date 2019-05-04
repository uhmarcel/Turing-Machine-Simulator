import React, { Component } from 'react';
import Display from './Components/Display';
import Control from './Components/Control';
import Editor from './Components/Editor';
import './Css/App.css'

import Program from './Classes/Program';
import TuringMachine from './Classes/TuringMachine';

class App extends Component {

  state = {
    TM: new TuringMachine(),
    program: new Program()
  }

  componentDidMount() {
    const {TM} = this.state;
    TM.setInput('111#11');
    this.updateTM();
  }

  updateTM = async () => {
    const {TM} = this.state;
    this.setState({TM});
  }

  updateProgram = async () => {
    const {program} = this.state;
    this.setState({program});
    console.log(program.toString());
  }

  render() {
    const {TM, program} = this.state;
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
        />
        <Editor 
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

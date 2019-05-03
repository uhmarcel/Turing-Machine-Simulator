import React from 'react';
import Display from './Components/Display';
import Editor from './Components/Editor';
import './App.css'

import Program from './Classes/Program';
import Instruction from './Classes/Instruction';
import TuringMachine from './Classes/TuringMachine';
import { defaultCode } from './Extras/default-code.js';

let TM = new TuringMachine();
let program = new Program();

program.addInstruction(new Instruction(0,'r','1','0',1));
program.addInstruction(new Instruction(0,'r','#','1',0));
program.addInstruction(new Instruction(1,'l','0','0',0));
program.addInstruction(new Instruction(1,'l','1','1',2));
program.loadCode(defaultCode);

TM.setInput('111');
console.log(TM.toString());
while (!TM.isDone()) {
console.log(TM.step(program));
}
console.log(TM.getOutput());


function App() {
  return (
    <div className='App'>
      <Display/>
      <Editor/>
    </div>
  );
}

export default App;

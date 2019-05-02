import React from 'react';
import Display from './Components/Display';
import Editor from './Components/Editor';
import './App.css'


function App() {
  return (
    <div className='App'>
      <Display/>
      {/* <hr/> */}
      <Editor/>
    </div>
  );
}

export default App;

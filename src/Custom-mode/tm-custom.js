import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple'


CodeMirror.defineSimpleMode("tm-custom", {
    start: [
      {
        regex: /^(q[0-9]+])\s*([rl])/, 
        token: ["tag   ", "atom  "]
      },
      {
        regex: /\(\s*(?:.\s*\/\s*.\s*|.\s*),\s*(q-?[0-9]+)\s*\)/,
        token: ["attribute  "]
      },
      {
        regex: /#.*/, 
        token: "comment"
      } 
    ],
    meta: {
      lineComment: "#"
    }
  });
  
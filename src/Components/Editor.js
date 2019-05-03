import React, { Component, Fragment } from 'react';
import { Input, Container, Row, Col, Button, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faArrowLeft, faArrowRight, faPlay, faFastForward } from '@fortawesome/free-solid-svg-icons';
import { Controlled as CodeMirror} from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/xq-light.css');
require('../Custom-mode/tm-custom.js');

require('./Editor.css');

class Editor extends Component {

    state = {
        code:     
`# Multiply TM program
# Outputs the multiplication of two inputs on alphabet {1}*

# For each multiplicand, copy input to end of tape
q0]r (#, q1)
q1]r (1/M, q2) (#, q8)    # Mark current multiplicand, and copy input
q2]l (#, q3)

# Copy first input at end of tape
q3]l (1/X, q4) (#, q0)    # Mark current char being copied
q4]r (#, q5)        
q5]r (#, q6)
q6]r (#/1, q7)
q7]l (X/1, q3)            # Remove mark and recover

# All multiplicands processed, finish 
q8]l (M/1, q8) (#, q9)
q9]r (#, q-1)`
    }

    updateCode = async (editor, data, code) => {
        this.setState({code});
    }

    render() {
        return (
            <div>
                <div className='container-fluid EditorPanel'>
                    <span>Editor</span>
                    <div className='float-right'>
                        <Button color='light' className='EditorButton'><FontAwesomeIcon icon={faUndoAlt}/></Button>{'  '}
                        <Button color='light' className='EditorButton'><FontAwesomeIcon icon={faArrowLeft}/></Button>{'  '}
                        <Button color='light' className='EditorButton'><FontAwesomeIcon icon={faArrowRight}/></Button>{'  '}
                        <Button color='light' className='EditorButton' style={{paddingLeft:'8px'}}><FontAwesomeIcon icon={faPlay} style={{height: '15px'}}/></Button>{'  '}
                        <Button color='light' className='EditorButton'><FontAwesomeIcon icon={faFastForward}/></Button>    
                    </div>
                </div>
                <div style={{height:'calc(100% - 55px'}}>
                    <CodeMirror 
                        value={this.state.code} 
                        onBeforeChange={this.updateCode}
                        options = {{
                            mode: 'tm-custom',
                            theme: 'xq-light',
                            lineNumbers: true
                        }}
                    />
                    {/* <Input type="textarea" spellCheck="false" style={editorStyles} defaultValue="# Multiply TM program
# Outputs the multiplication of two inputs on alphabet {1}*

# For each multiplicand, copy input to end of tape
q0]r (#, q1)
q1]r (1/M, q2) (#, q8)    # Mark current multiplicand, and copy input
q2]l (#, q3)

# Copy first input at end of tape
q3]l (1/X, q4) (#, q0)    # Mark current char being copied
q4]r (#, q5)        
q5]r (#, q6)
q6]r (#/1, q7)
q7]l (X/1, q3)            # Remove mark and recover

# All multiplicands processed, finish 
q8]l (M/1, q8) (#, q9)
q9]r (#, q-1)"/> */}
                </div>
            </div>
        );
    }

}

export default Editor
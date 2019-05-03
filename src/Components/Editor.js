import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faArrowLeft, faArrowRight, faPlay, faFastForward } from '@fortawesome/free-solid-svg-icons';
import { Controlled as CodeMirror} from 'react-codemirror2';
import { defaultCode } from '../Extras/default-code'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import '../Custom-mode/tm-custom.js';
import './Editor.css';


class Editor extends Component {

    state = {
        code: defaultCode
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
                </div>
            </div>
        );
    }

}

export default Editor
import React, { Component } from 'react';
import { Controlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import '../Custom-mode/TM-custom.js';
import '../Css/Editor.css';


class Editor extends Component {

    state = {
        previousCodeLength: null,
        code: ''
    }

    componentDidUpdate() {
        const {defaultCode} = this.props;
        const {previousCodeLength} = this.state;
        if (defaultCode.length !== previousCodeLength) {            
            this.setState({previousCodeLength: defaultCode.length});
            this.updateCode(defaultCode);
        }
    }


    updateCode = async(code) => {
        const { program, updateProgram } = this.props;
        this.setState({code});
        program.loadCode(code);
        updateProgram();
    }

    handleChange = async (editor, data, code) => {
        this.updateCode(code);
    }

    render() {
        return (
            <div style={{height:'calc(100% - 200px'}}>
                <CodeMirror 
                    value={this.state.code} 
                    onBeforeChange={this.handleChange}
                    options = {{
                        mode: 'tm-custom',
                        theme: 'xq-light',
                        lineNumbers: true
                    }}
                />
            </div>
        );
    }

}

export default Editor
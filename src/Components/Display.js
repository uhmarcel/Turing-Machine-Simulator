import React, { Component } from 'react';
import { Container, Input } from 'reactstrap';

const styles = {
    height: '90px',
    background: '#7f93ad',
    color: '#111',
    font: '10px'
}

const displayArea = {
    font: '14px Consolas',
    letterSpacing: '2px',
    height: '27px',
    border: 'none',
    color: '#111',
    fontWeight: 'bold'
}

const outputText = {
    font: '12px monospace'
}


class Display extends Component {
    
    state = {
        displayValue: this.props.TM.toString(),
        focus: false
    }

    componentDidUpdate() {
        const {TM} = this.props;
        const {displayValue, focus} = this.state;
        if (displayValue !== TM.toString() && !focus) {
            this.setState({displayValue: TM.toString()});
        }
    }
    

    updateInput = async (e) => {
        this.setState({displayValue: e.target.value});
    }

    processInput = async (e) => {
        const {TM, updateTM} = this.props;
        const input = e.target.value;
        const r = /.*(?:\[|\])/g;
        if (!r.test(input)) {
            TM.setInput(input);
            await updateTM();
        }
        this.setFocusOff();
    }

    setFocusOn = () => {
        this.setState({focus: true});
    }

    setFocusOff = () => {
        this.setState({focus: false});
    }

    render() {
        const {displayValue} = this.state;
        return (
            <Container fluid style={styles} className='d-flex align-items-center' >
                <div className='w-100'>
                    <h6>Turing Machine Simulation</h6>
                    <Input 
                        type='text' 
                        name='tmDisplay' 
                        spellCheck='false' 
                        className='w-100 mt-0' 
                        style={displayArea} 
                        value={displayValue}
                        onFocus={this.setFocusOn}
                        onChange={this.updateInput}
                        onBlur={this.processInput}
                    />
                    <span style={outputText}>Output: 11101</span>
                </div>
            </Container>
        );
    }

}

export default Display
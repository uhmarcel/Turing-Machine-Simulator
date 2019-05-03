import React, { Component } from 'react';
import { Container, Input } from 'reactstrap';

const styles = {
    height: '90px',
    background: '#90a4be',
    color: '#111',
    font: '10px'
}

const displayArea = {
    font: '14px monospace',
    letterSpacing: '1px',
    height: '28px',
    border: 'none'
}

const outputText = {
    font: '12px monospace'
}


class Display extends Component {
    
    state = {
        displayValue: 'lol'
    }

    updateInput = async (e) => {
        this.setState({displayValue: e.target.value});
    }

    processInput = async (e) => {
        const {TM, updateTM} = this.props;
        TM.setInput(e.target.value);
        await updateTM();
        this.setState({displayValue: TM.toString()});
    }

    render() {
        const {TM} = this.props;
        const {displayValue} = this.state;
        return (
            <Container fluid style={styles} className='d-flex align-items-center' >
                <div className='w-100'>
                    <h6>Turing Machine Simulator</h6>
                    <Input 
                        type='text' 
                        name='tmDisplay' 
                        spellCheck='false' 
                        className='w-100 mt-0' 
                        style={displayArea} 
                        value={displayValue}
                        onChange={this.updateInput}
                        onBlur={this.processInput}
                    />
                    <span className='container' style={outputText}>Output: 11101</span>
                </div>
            </Container>
        );
    }

}

export default Display
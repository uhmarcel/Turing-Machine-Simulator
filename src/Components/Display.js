import React, { Component } from 'react';
import { Container, Input, Label, FormGroup, FormText } from 'reactstrap';

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

    render() {
        return (
            <Container fluid style={styles} className='d-flex align-items-center' >
                <div className='w-100'>
                    <h6>Turing Machine Simulator</h6>
                    <Input type='text' name='tmDisplay' spellCheck='false' className='w-100 mt-0' style={displayArea} defaultValue='#10101001#11#'/>
                    <span className='container' style={outputText}>Output: 11101</span>
                </div>
            </Container>
        );
    }

}

export default Display
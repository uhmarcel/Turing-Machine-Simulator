import React, { Component, Fragment } from 'react';
import { Input, Container, Row, Col, Button, Label } from 'reactstrap';

const styles = {
    padding: '0px 8px',
    height: 'calc(100vh - 90px)'
}

const buttonStyles = {
    borderRadius: '50%',
    height: '32px',
    width: '32px'
}

const editorStyles = {
    font: '12px Consolas',
    width: '100%',
    overflowY: 'scroll',
    border: 'none'
}

const panelStyles = {
    height: '40px',
    paddingTop: '6px',
    paddingBottom: '3px'
}

class Editor extends Component {

    render() {
        return (
            <div style={styles}>
                <div className='container d-flex align-items-end justify-content-between ' style={panelStyles}>
                    <spam>Editor</spam>
                    <spam className='float-right'>
                            <Button color='info' style={buttonStyles}></Button>{' '}
                            <Button color='info' style={buttonStyles}></Button>
                    </spam>
                </div>
                <div className='d-flex' style={{height:'calc(100% - 50px'}}>
                    <Input type="textarea" spellcheck="false" style={editorStyles} defaultValue="# Multiply TM program
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
q9]r (#, q-1)"/>
                </div>
            </div>
        );
    }

}

export default Editor
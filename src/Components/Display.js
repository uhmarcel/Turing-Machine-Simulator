import React, { Component } from 'react';
import { Container, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import '../Css/Display.css';




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
        const {TM} = this.props;
        return (
            <Container fluid className='d-flex align-items-center Display' >
                <div className='w-100'>
                    <h6>Turing Machine Simulation</h6>
                    <InputGroup size='sm'>
                        <Input 
                            type='text' 
                            name='tmDisplay' 
                            spellCheck='false' 
                            className='DisplayArea'
                            value={displayValue}
                            onFocus={this.setFocusOn}
                            onChange={this.updateInput}
                            onBlur={this.processInput}
                        />
                        <InputGroupAddon addonType="append">
                            <InputGroupText style={{border:'none'}}>{'q' + TM.getState()}</InputGroupText>
                        </InputGroupAddon>  
                    </InputGroup>
                    <span className='OutputText'>Output: 11101</span>
                </div>
            </Container>
        );
    }

}

export default Display
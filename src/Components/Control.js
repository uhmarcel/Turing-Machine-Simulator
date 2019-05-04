import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faArrowLeft, faArrowRight, faPlay, faPause, faFastForward } from '@fortawesome/free-solid-svg-icons';

import '../Css/Control.css';


class Control extends Component {

    state = {
        play: null
    }

    simulationReset = async () => {
        const {TM, updateTM} = this.props;
        TM.resetTape();
        TM.setInput(TM.input);
        updateTM();
    }

    simulationBack = async () => {
        console.log('Not yet implemented');
    }

    simulationStep = async () => {
        const {TM, program, updateTM} = this.props;
        TM.step(program);
        updateTM();
    } 

    simulationPlay = async () => {
        let {play} = this.state;
        if (play === null) {
            play = setInterval(this.simulationStep, 200);
        }
        else {
            clearInterval(play);
            play = null;
        }
        this.setState({play});
    }

    simulationFastforward = async () => {
        const {TM, program, updateTM} = this.props;
        while (!TM.isDone()) {
            TM.step(program);
        }
        updateTM();
    }

    getPlayIcon = () => {
        const {play} = this.state;
        return play ? faPause : faPlay;
    }

    getPlayStyle = () => {
        const {play} = this.state;
        return play ? {} : {paddingLeft:'8px'};
    }

    render() {
        const playIcon = this.getPlayIcon();
        return (
            <div className='container-fluid ControlPanel'>
                <span>Editor</span>
                <div className='float-right'>
                    <Button color='light' className='ControlButton' onClick={this.simulationReset}><FontAwesomeIcon icon={faUndoAlt}/></Button>{'  '}
                    <Button color='light' className='ControlButton'><FontAwesomeIcon icon={faArrowLeft}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationStep}><FontAwesomeIcon icon={faArrowRight}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationPlay} style={this.getPlayStyle()}><FontAwesomeIcon icon={playIcon} style={{height: '15px'}}/></Button>{'  '}
                    <Button color='light' className='ControlButton' onClick={this.simulationFastforward}><FontAwesomeIcon icon={faFastForward}/></Button>    
                </div>
            </div>
        );
    }

    

}

export default Control;
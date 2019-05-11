import React, { Component } from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { samplePrograms } from '../../Extras/example-programs';

const layoutStyles = {
    display: 'inline'
}

const iconStyles = {
    borderRadius: '50%',
    color: '#444',
    width: '21px',
    height: '21px',
    marginTop: '-10px',
    marginRight: '10px',
    padding: '1px 3px 0px 0px',
    background: '#b0c3cf',
    border: 'none'
}

class ProgramDropdown extends Component {
    
    state = {
        dropdownOpen: false
    }
    
    toggle = () => {
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}));
    }

    onSelection = (programIndex) => {
        const {code, sampleInput} = samplePrograms[programIndex];
        if (this.props.onSelection) {
            this.props.onSelection(code, sampleInput);
        }
    }

    render() {
        return (
            <ButtonDropdown size='sm' isOpen={this.state.dropdownOpen} toggle={this.toggle} style={layoutStyles}>
                <DropdownToggle caret  style={iconStyles}/>
                <DropdownMenu>
                    <DropdownItem header>Programs</DropdownItem>
                    <DropdownItem divider />
                    {samplePrograms.map( (program, key) => 
                        <DropdownItem onClick={() => this.onSelection(key)} key={key}>
                            {program.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </ButtonDropdown>  
        );
    }
}

export default ProgramDropdown;
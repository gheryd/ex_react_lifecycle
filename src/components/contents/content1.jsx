import React, { Component } from 'react';
import InputText from "../common/inputText";
import Label from '../common/label';


class Content1 extends Component {
    state = {label: ''  }

    onChange = ({target: {value}}) => {
        this.setState({label:value })
    }

    render() { 
        const {label} = this.state;
        return ( 
        <React.Fragment>
            <h1>Prima App</h1>
            <InputText onChangeHandler = {this.onChange} />
            <Label label={label} />
        </React.Fragment> );
    }
}
 
export default Content1;
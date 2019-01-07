import React, { Component } from 'react';


class ImportText extends Component {
    state = {  }
    render() { 
        const {onChangeHandler} = this.props;
        return ( 
            <input type="text" onChange={onChangeHandler} />
         );
    }
}
 
export default ImportText;
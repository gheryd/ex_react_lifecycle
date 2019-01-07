import React, { Component } from 'react';

class ItemUser extends Component {
    state = {  }

    createHandleClick = (user) => (e) => {
        this.props.onClick(user);
    }

    render() { 
        const {name, surname} = this.props.user;
        return ( <div onClick={this.createHandleClick(this.props.user)}>
            <span className ="text text-primary">{name}</span> - 
            <span>{surname}</span>
        </div> );
    }
}
 
export default ItemUser;
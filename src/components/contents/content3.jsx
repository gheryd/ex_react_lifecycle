import React, { Component } from 'react';
import Form from "../common/form";
import List from "../common/list";
import ItemUser from "../common/itemUser";

class Content3 extends Component {

    state = {
        list: [],
        currentUser:{surname:'', name:''}
    }

    userAdded = (user) => {
        //console.log("user added", user);
        this.state.list.push(user);
        this.setState({list: this.state.list});
    }

    userSelected = (user) => {
        this.setState({currentUser: user});
    }

    getUserComp = (user) => {
        return <ItemUser user = {user} onClick={this.userSelected} />
    }

    render() {
        const {list, currentUser} = this.state;
        return (
            <div>
                <div>
                    <Form onSubmit = {this.userAdded} user={currentUser}/>
                </div>
                <div>
                    <List list={list} onAdd={this.getUserComp} />
                </div>
            </div>
        );
    }
}
 
export default Content3;
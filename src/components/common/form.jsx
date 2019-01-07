import React, { Component } from 'react';


class Form extends Component {

    submit = (e) => {
        e.preventDefault();
        var user = Object.keys(this.refs).reduce( (obj, k) =>{
            obj[k] = this.refs[k].value;
            this.refs[k].value = '';
            return obj;
        }, {} );
        this.props.onSubmit(user);
    }

    onChange = ({target:el}) => el.value = el.value.toUpperCase();

    render() {
        return (
        <form onSubmit={this.submit}>
            <div className="form-group">
                <input type="text" ref="name" onChange={this.onChange} className="form-control" placeholder = "name"/>
            </div>
            <div className="form-group">
                <input type="text" ref="surname" className="form-control" placeholder="surname" />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
        </form>
        );
    }

    componentDidUpdate(){
        const {user} = this.props; 
        this.refs.name.value = user.name;
        this.refs.surname.value = user.surname; 
    }
}
 
export default Form;
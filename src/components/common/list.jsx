import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    state = {  }

    getItem = (item)=>{
        if( this.props.onAdd ){
            return this.props.onAdd(item);
        }else {
            return JSON.stringify(item);
        }
    }

    render() {
        const {list} = this.props;
        return ( 
            <ul className="list-group">
                {list.map( (item, i)=><li key={i} className='list-item'>{this.getItem(item)}</li> )}
            </ul>            

         );
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired
}
 
export default List;
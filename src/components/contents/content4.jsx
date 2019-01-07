import React, { Component } from 'react';
import StarsRating from '../common/starsRating';

class Content4 extends Component {
    
    state= {
        rating: 0
    }

    onRating = (rating)=>{
        this.setState({rating:rating===1 && this.state.rating===1 ? 0 : rating });
    }

    render() { 
        return ( <div>
            <h1>Content 4: stars rating</h1>
            <StarsRating onChange={this.onRating} rating={this.state.rating}/>
            <span>rating: </span>
            <span className="label label-default">{this.state.rating}</span>
        </div> );
    }
}
 
export default Content4;
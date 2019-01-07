import React, { Component } from 'react';
import Start from './star';

class StarsRating extends Component {
    
    onStarClick = (starsSelected) => {
        this.props.onChange(starsSelected);
    }

    render() { 
        const {rating} = this.props;
        return ( <div>
        <div>
            {[...Array(5)].map( (n, i)=>
              <Start key={i} selected={i+1<=rating} 
              onClick={() => this.onStarClick(i+1) }/>
            )  }
            </div>
        </div> );
    }
}


export default StarsRating;
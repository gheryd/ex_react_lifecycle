import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Content2 extends Component {

    static test = "test static prop inside Class";

    render() { 
        const props = this.props;
        console.log("static prop test:", Content2.test);
        return ( 
        <React.Fragment>
            <h1>Content 2</h1>
            <h2>Test validation props</h2>
            <p>Check error validation on console</p>
            <ul>
                {Object.keys(props).map(k=>(<li key={k} >{ k }: {props[k]}</li>) )}
            </ul>
        </React.Fragment> );
    }
}
 
Content2.propTypes= {
    name: PropTypes.string.isRequired,
    isMale: PropTypes.bool,
    phone: (props, propName) => {
        const re = /^\n{8}$/;
        if( !re.test(props[propName]) ){
            return new Error("throw for testing: wrong format for "+propName);
        }
        return null;
    } 
}

Content2.defaultProps = {
    name: 'Pippo',
    isMale: true
}

export default Content2;
import React from 'react';

const Star = ({selected, onClick}) => (
    <span 
        style={{cursor:'pointer',margin:10,fontSize:50, color:selected? 'red':' black' }}
        onClick= {onClick}
    >*</span>
)


export default Star;
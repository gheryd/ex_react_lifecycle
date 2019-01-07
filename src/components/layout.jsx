import React from 'react';


const Layout = ({content, sideMenu, title, description}) => {
    return (<div className='container app-container-main'>
        <div className="row">
            <div className="col col-3">
                {sideMenu}
            </div>
            <div className="col">
                <h1>{title}</h1>
                <h5>{description}</h5>
                <div>{content}</div>
            </div>
        </div>
        
    </div>

)};


export default Layout;
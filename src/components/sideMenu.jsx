import React, {Component} from 'react';


class SideMenu extends Component {
    state = { 
     }

    handleClick = (item) => (e) => this.props.onSelect(item);

    getButton = ({name:id, label}, selectedId) => (
        <a key={id} className={"list-group-item"+(id===selectedId?' active':'')} onClick={this.handleClick(id)}>
            {label}
        </a>
    )

    render() {
        const {currentId:id, items} = this.props;
        
        return ( 
            <div className="list-group list-group-flush">
                {items.map( (item, i) => this.getButton(item, id) )}
            </div> 
    );
    }
}
 
export default SideMenu;

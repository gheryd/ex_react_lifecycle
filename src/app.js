import React, {Component} from 'react';
import Layout from "./components/layout";
import SideMenu from "./components/sideMenu";
import Content1 from "./components/contents/content1";
import Content2 from "./components/contents/content2";
import Content3 from "./components/contents/content3";
import Content4 from "./components/contents/content4";
import Content5 from "./components/contents/content5";
import Content6 from "./components/contents/content6";
import NoContent from './components/contents/nocontent';

class App extends Component {
    state = {
        content: null,
        currentContentId: 'content6'
    };

    contents = {
        'content1': {create:()=><Content1 />, label:"Content 1", title:'Content 1', description:"content 1"},
        'content2': {create:()=><Content2 />, label:"Content 2", title:'Content 2', description:"content 2" },
        'content3': {create:()=><Content3 />, label:"Content 3", title:'Content 3', description:"content 3" },
        'content4': {create:()=><Content4 />, label:"Content 4", title:'Content 4', description:"content 4" },
        'content5': {create:()=><Content5 />, label:"Lifecycle", title:'Lifecycle', description:"try and watch lifecycle compontents. Open consolel!" },
        'content6': {create:()=><Content6 />, label:"Form Statless", title:'Form stateless', description:"Form stateless prefilled" }
    }

    render(){
        return (<Layout {...this.getLayoutConfig()}/>)
    }

    onSelectMenu = (item) => this.setState({currentContentId:item});

    getContent(){
        const {currentContentId} = this.state;
        if( this.contents[currentContentId] ){
            return this.contents[currentContentId].create()
        }
        return <NoContent/>;
        
    }

    getSideMenu(){
        const menuCfg = {
            onSelect: this.onSelectMenu,
            currentId: this.state.currentContentId,
            items: Object.keys(this.contents).reduce((cfg, contentId)=>{
                cfg.push( { name: contentId, label:this.contents[contentId].label  } );
                return cfg;
            }, [])
        }
        return <SideMenu {...menuCfg}/>
    }

    getLayoutConfig(){
        const {currentContentId:id} = this.state;
        const texts = this.contents[id] ?
            {title:this.contents[id].title, description: this.contents[id].description}
            : {};
        return {
            ...texts,
            content: this.getContent(),
            sideMenu:this.getSideMenu()
        }
    }

}

export default App;
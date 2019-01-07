import React, { Component } from 'react';

class LogComponentEvent extends Component {
    
    constructor(props, label){
        super(props);
        this.label = label;
        console.log(`${this.label} -> Contructor - initial state`);
    }
    log = (eventName)=> console.log(`${this.label} -> ${eventName}`)
    componentWillMount(){ this.log("componentWillMount"); }
    componentDidCatch(){ this.log("componentDidCatch");  }
    componentDidMount(){ this.log("componentDidMount"); }
    componentDidUpdate(){ this.log("componentDidUpdate"); }
    componentWillUnmount(){ this.log("componentWillUnmount"); }
    componentWillReceiveProps(){ this.log("componentWillReceiveProps"); }
    componentWillUpdate(){ this.log("componentWillUpdate"); }
}

class Content5 extends LogComponentEvent {

    colors= ['red', 'green'];
    state = { count:0, colorId:0}
 
        constructor(props){
        super(props, 'Content5');
    }

    onAdd = (itemsCount=1) => (ev) => {
        this.log("add onClick "+itemsCount);
        this.setState({count: this.state.count +itemsCount});
    }

    doReset = () => {
        this.log("doReset");
        this.setState({count: 0});
    }

    clearConsole = () => {
        console.clear();
    }

    changeColor = () => {
        this.log("changeColor");
        const newColorId = this.state.colorId===0 ? 1 : 0;
        this.setState({colorId:newColorId});
    }

    getColor = () => this.colors[this.state.colorId];

    render() { 
        this.log("render");
        const {count} = this.state;
        return ( <div>
            <div>state.count: {count}</div>
            <button onClick={this.onAdd()}>add </button>
            <button onClick={this.onAdd(2)}>add 2</button>
            <button onClick={this.onAdd(3)}>add 3</button>
            <button onClick={this.doReset}>reset</button>
            <button onClick={this.clearConsole}>clear console</button>
            <button onClick={this.changeColor}>changeColor</button>
            <div>
            { [...Array(count)].map( (n, i) => <Content5Child 
                key={i} 
                color={this.getColor()} id={i} /> 
            ) }
            </div>
        </div> );
    }
} 

class Content5Child extends LogComponentEvent{
    constructor(props){
        super(props, 'Child '+props.id);
        this.text = 'Child '+props.id;
        this.suffix = '';
    }
    mapBackground = {
        'mounted' : '#EEE', 'updated': '#CFC'
    }
    componentWillMount(){ super.componentWillMount(); this.suffix = "mounted" }
    componentWillUpdate(){ super.componentWillUpdate(); this.suffix = "updated"  }
    render(){
        this.log("render");
        
        return <div 
            style={{padding:10, margin:10, fontWeight:'bold', 
            fontSize:15, backgroundColor: this.mapBackground[this.suffix], 
            color:this.props.color}}>{this.text} {this.suffix}</div>
    }
    
}

export default Content5;
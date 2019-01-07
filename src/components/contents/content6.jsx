import React, {Component} from 'react';
import FormSL from '../common/formSL';

class Content6 extends Component {
    state = { 
        formCfg: {name:'', cities:[]},
        submittedData: {}
     }

    dataList = [
        {name:'Pippo', cities:['Milan', 'Rome', 'Palermo'], defaultCity:'Rome',  isMale:true },
        {name:'Tina', cities:['Torino', 'Genova', 'Pavia'], isMale:false},
        {name:'Pino', cities:['Venice', 'Padova', 'Firenze'], isMale:true}
    ]

    onClick = (formCfg) => this.setState({formCfg}); 
    onSave = (submittedData) => this.setState({submittedData});
    render() {
        const {formCfg, submittedData} = this.state; 
        return ( <div>
            <p>click item to fill form:</p>
            {this.dataList.map( (cfg, i)=>(
            <div key={i} onClick={(ev)=>this.onClick(cfg)} 
                style={{cursor:'pointer', backgroundColor:'#CCC', margin:2}}>
                {JSON.stringify(cfg)}
            </div>))}
            <div>
                <p>Submitted data: {JSON.stringify(submittedData)}</p>
            </div>
            <div><FormSL {...formCfg} save={this.onSave}/></div>

        </div> );
    }
}

export default Content6;
import React, {Component} from 'react';

class FormSL extends Component {

    state = {city:''};

    onSubmit = ({name: {value:name}, city:{value:city},isMale:{checked:isMale}}) => this.props.save({name, city, isMale});

    render() { 
        const {name, cities,isMale, defaultCity} = this.props;
        console.log(defaultCity);
        return ( <form>
            <input ref='name' defaultValue={name} type="text" className="form-control" /><br/>
            <select ref='city' className="form-control" size={cities.length+1}>
                <option value=''>[select city]</option>
                 {cities.map((city)=><option key={city} selected={defaultCity===city} value={city}>{city}</option> ) }
            </select><br/>
            <input ref="isMale" type="checkbox" defaultChecked={isMale} /> isMale<br/>
            <button type="button" onClick={() => this.onSubmit(this.refs)} >submit</button>
        </form> );
    }
}

export default FormSL;
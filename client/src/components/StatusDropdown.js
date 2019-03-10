import React, {Component} from 'react';

export default class StatusDropdown extends Component {
    constructor(props){
        super(props);
    }

    selectStatus = (e) => {
        this.props.changeStatus(e);
      }
      
    render() {
        return (
            <select id="status" onChange={this.selectStatus} value={this.props.value}>
                <option value="Working">Working</option>
                <option value="OnVacation">On Vacation</option>
                <option value="LunchTime">Lunch Time</option>
                <option value="BusinessTrip">Business Trip</option>
            </select>

        );
    }
}
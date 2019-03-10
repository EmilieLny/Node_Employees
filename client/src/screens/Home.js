import React from 'react';
import StatusDropdown from '../components/StatusDropdown';
import TableData from '../components/TableData';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            data: [],
            user: '',
            status:'Working',
        }
    };

    componentWillMount() {
        this.getData();
    };

    componentDidUpdate(prevProps){
        const { data: oldProps} = prevProps;
        const { data } = this.props;

        if( data && data !== oldProps) {
            // this.getData();
        }
    };

    getData() {
        fetch('http://localhost:5000/users')
            .then(results => results.json())
            .then(results => this.setState({ 
                data: results, 
                user: results[0]['email'],
                status: results[0]['status'],
            }));
    };
    
    changeStatus = (e) => {
        this.setState({
            status: e.target.value,
        })

        fetch(`http://localhost:5000/users/update/${this.state.user}/${e.target.value}`)
            .then(results => results.json())
            .then(results => this.setState({ 
                data: results, 
                user: results[0]['email'],
                status: results[0]['status'],
            }));
    }

    render() {
        const {data, user, status} = this.state;
        return (
            <div>
                <h1>Hello {user}, you are {status}!</h1>
                <p>Update My Current Status :</p>
                <StatusDropdown changeStatus={this.changeStatus} value={status}/>

                <p>List of employees :</p>
                <TableData data={data} />
            </div>
        )
    }
}

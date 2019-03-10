import React from 'react';
import {Table} from 'antd';

export default class TableData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            details: [],
        };
    }
    componentDidMount() {
        this.setState({
            details: this.props.data
        })
    }

    componentDidUpdate(prevProps){
        const { data: oldProps} = prevProps;
        const { data } = this.props;

        if( data && data !== oldProps) {
            this.setState({ details: this.props })
        }
    }

    render() {
        const dataSource = this.state.details.data;

        const columns = [{
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },{
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
        ]
       
        return (
            <div>
                 <Table dataSource={dataSource} columns={columns} pagination={false}/>
            </div>
        );
    }
}
import React from 'react'
import { Table } from 'reactstrap';


class TableComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            formData: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.statusChange(event.target.name, event.target.value)

    }

    render() {
        // console.log(this.state.formData)
        return (
            <div>
                <h2>Listing Tickets {this.props.tickets.length}</h2>
                <Table dark striped bordered>
                    <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th>Priority</th>
                            <th> Message </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tickets.map(function (data) {
                                return (<tr key={data.ticket_code}>
                                    <td>{data.ticket_code}</td>
                                    <td>{data.name}</td>
                                    <td>{data.department}</td>
                                    <td>{data.priority}</td>
                                    <td>{data.message}</td>
                                    <td> <input type="checkbox" value={data.status} onChange={this.handleChange} name={data.ticket_code} checked={data.status == "closed"? "checked": "" }/></td>
                                </tr>)
                            }.bind(this))
                        }
                    </tbody>
                </Table>
            </div >
        )
    }
}


export default TableComponent
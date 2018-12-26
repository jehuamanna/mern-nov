import React from 'react'
import Table from './Table'
import Form from './Form'

class TicketMaster extends React.Component{
    render(){
        return (
            <div>
                <Table/>
                <Form/>
            </div>
        )
    }
}

export default TicketMaster
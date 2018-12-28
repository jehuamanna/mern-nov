import React from 'react'
import TableComponent from './Table'
import Form from './Form'
import SearchAndSort from './SearchAndSort'
import axios from 'axios'


class TicketMaster extends React.Component {
    constructor() {
        super()
        this.state = {
            tickets: [],
            originalTickets: [],
            progress: 0

        }
        this.setData = this.setData.bind(this)
        this.search = this.search.bind(this)
        this.sort = this.sort.bind(this)
        this.statusChange = this.statusChange.bind(this)
    }
    componentDidMount() {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=6fc7ce15eecbbb73').then(function (response) {
            this.setState({
                tickets: response.data,
                originalTickets: response.data
            })
        }.bind(this))




    }

    componentDidUpdate() {
        // let closedTickets = this.state.tickets.filter(function (ticket) {
        //     return ticket.status == 'closed'

        // })

        // let prog = Math.round((closedTickets.length / this.state.originalTickets.length) * 100)
        // this.setState({ progress: prog })
        // console.log(prog)
    }

    setData(formDetails) {
        this.setState({
            tickets: this.state.tickets.concat(formDetails),
            originalTickets: this.state.originalTickets.concat(formDetails)
        })
    }

    search(searchValue, sortValue) {
        console.log('sort', sortValue)

        if (sortValue == 'all') {
            this.setState(function (prevState) {
                return {
                    tickets: prevState.originalTickets.filter(function (ticket) {
                        return ticket.ticket_code.toLowerCase().includes(searchValue.toLowerCase())
                    })
                }
            })

        }
        else {
            console.log(this.state.tickets)
            this.setState(function (prevState) {
                return {
                    tickets: prevState.originalTickets.filter(function (ticket) {
                        return ticket.ticket_code.toLowerCase().includes(searchValue.toLowerCase()) && ticket.priority == sortValue
                    })
                }
            })
        }
    }

    sort(sortValue, searchValue) {

        if (sortValue == 'all') {
            this.setState({
                isSorting: false
            })
            this.setState(function (prevState) {
                return {
                    tickets: prevState.originalTickets

                }
            })
        }

        else {
            this.setState(function (prevState) {
                let searchArray = prevState.originalTickets
                return {
                    tickets: searchArray.filter(function (ticket) {
                        return ticket.priority == sortValue && ticket.ticket_code.toLowerCase().includes(searchValue.toLowerCase())
                    })
                }
            })
        }
    }

    statusChange(id, ticketStatus) {
        let formData = {
            status: ticketStatus == "open" ? "closed" : "open"
        }
        let url = `http://dct-api-data.herokuapp.com/tickets/${id}?api_key=6fc7ce15eecbbb73`
        console.log(url)
        axios.put(url, formData).then(function (response) {
            // this.props.setData(response.data)            
            let status = this.state.originalTickets.find(function (ticket) {
                return ticket.ticket_code == id
            })
            status.status == "open" ? status.status = "closed" : status.status = "open"
            console.log(status.status)
            this.setState({})
        }.bind(this))


    }

    render() {

        return (
            <div>
                <SearchAndSort search={this.search} sort={this.sort} progress={this.state.progress} />
                <TableComponent setData={this.setNewData} tickets={this.state.tickets} statusChange={this.statusChange} />
                <Form setData={this.setData} />
            </div>
        )
    }
}

export default TicketMaster
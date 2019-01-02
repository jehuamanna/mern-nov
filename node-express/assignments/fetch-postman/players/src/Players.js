import React from 'react'
import Form from './Form';

export default class Players extends React.Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
        this.submitData = this.submitData.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:3001/players').then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    players: data
                })
            })
    }

    submitData(player){
        fetch('http://localhost:3001/players', {
            method: "POST",
            body: JSON.stringify(player),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
        .then(data =>{
            this.setState(prevState =>({
                players: prevState.players.concat(player)
            }))
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.players.map(player => {
                            return <li key={player.id}> id: {player.id} name: {player.name}</li>
                        })
                    }

                </ul>
                <Form submitData={this.submitData} />
            </div>
        )
    }
}


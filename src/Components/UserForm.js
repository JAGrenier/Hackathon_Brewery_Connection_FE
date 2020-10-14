import React, { Component } from 'react'

export default class UserForm extends Component {

    state = {
        fans: []
    }

    

    handleSubmit(event, brewery) {
        console.log(this.props.brewery)
        const fanBrewery = this.props.brewery 
        event.preventDefault()
        this.props.submitFan(this.state.fan, fanBrewery)
        this.setState({fan: ""})
    }

    handleNewFan(event){
        this.setState({fan: event.target.value})
    }

    render() {
        return (
            <form className="fan-form" onSubmit={(event) => this.handleSubmit(event)}>
                <label>Fan Name:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                value={this.state.fan}
                onChange={(event) => this.handleNewFan(event)}
                />
                <button type="submit">Sumbit</button>
            </form>
        )
    }
}

import React, { Component } from 'react'

const initialState = {
    name: ""
}
export default class UserForm extends Component {

    state = initialState

    handleSubmit(event, brewery) {
        console.log(this.props.brewery)
        const fanBrewery = this.props.brewery 
        event.preventDefault()
        this.props.submitFan(this.state.fan, fanBrewery)
        this.setState(initialState)
    }

    handleNewFan(event){
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <form className="fan-form" onSubmit={(event) => this.handleSubmit(event)}>
                <label>Fan Name:</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                value={this.state.name}
                onChange={(event) => this.handleNewFan(event)}
                />
                <button type="submit">Sumbit</button>
            </form>
        )
    }
}

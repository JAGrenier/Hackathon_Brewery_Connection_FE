import React from 'react'
import UserForm from './UserForm'

export default function breweryCard({brewery, submitFan}) {

let breweryArray = Object.values(brewery.fans)
let breweryFans = breweryArray.map(fan => fan.name)


    return (
        <ul className="card">
            <h3 className="brewery-link">
                <a href={`${brewery.website_url}`} >{brewery.name}</a>
            </h3>
            <li>{brewery.city}</li>
            <div id="fan-section">
                <h4>Brewery Fans</h4>
                <li>{breweryFans}</li>
                <UserForm submitFan={submitFan} brewery={brewery} />
            </div>
        </ul>
    )
}

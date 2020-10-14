import React from 'react'
import UserForm from './UserForm'

export default function breweryCard({brewery, submitFan}) {
    return (
        <ul className="card">
            <h3 className="brewery-link">
                <a href={`${brewery.website_url}`} >{brewery.name}</a>
            </h3>
            <li>{brewery.city}</li>
            <li>{brewery.fans}</li>
            <UserForm submitFan={submitFan} brewery={brewery} />
        </ul>
    )
}

import React from 'react'
import BreweryCard from './BreweryCard'

export default function BreweryContainer({breweries, submitFan}) {


    const showBreweries = () => breweries.map(brewery =>  <BreweryCard brewery={brewery} key={brewery.id} submitFan={submitFan} /> )

    return (
        <div className= 'container'>
            <h1>Brew Buddies</h1>
            <br></br>
            {showBreweries()}
        </div>
    )
}

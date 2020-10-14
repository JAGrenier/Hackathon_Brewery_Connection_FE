import React from 'react'
import BreweryCard from './BreweryCard'

export default function BreweryContainer({breweries, submitFan}) {


    const showBreweries = () => breweries.map(brewery =>  <BreweryCard brewery={brewery} key={brewery.id} submitFan={submitFan} /> )

    return (
        <div>
            <h2>Brewery Container</h2>
            {showBreweries()}
        </div>
    )
}

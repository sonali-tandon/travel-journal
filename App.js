import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App() {
    const dataItems = data.map(country => <Card 
    country={country}/>)
    return (
        <div>
            <Navbar />
            <div className="card-container">
                {dataItems}
            </div>
        </div>
    )
}
import { useState } from "react"
export function Calculator() {
    const [plus, zarb] = useState(1)
    function sum() {
        console.log("string")
        zarb(plus*(plus+1))
    }
    return (
    <div>
        <button onClick={sum}>click me</button>
        <h3 style={{background:"#fff"}}>{plus}</h3>
    </div>
    )
}
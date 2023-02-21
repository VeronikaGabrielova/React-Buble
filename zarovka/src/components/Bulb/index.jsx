import React from 'react';
import "./style.css"


const Bulb = ({on}) => {
    return (
        <>
        <div className = {on? "bulb--on":"bulb--off"}></div>
</>
    )
}

export default Bulb


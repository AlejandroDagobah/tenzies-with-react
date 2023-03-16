import React from "react"

export default function Die(props){
    
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }


    return (
        <div className='die' style={styles} onClick={()=>{props.holdDiceToggler(props.id)}}>
            <h2 className="die-title">{props.number}</h2>
        </div>
    )

}
import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
export default function App() {
  
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  function generateNewDice()
  {
    return {number: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }
  }

  function allNewDice()
  {
    const diceArray = []
  
    for (let i = 0; i < 10; i++) {

      diceArray.push(generateNewDice())
  
    }

    return diceArray;
  
  }

  function holdDice(diceId){

    setDice(prevDice =>{
      return prevDice.map(item =>{
        if(item.id === diceId){
          return {...item, isHeld: !item.isHeld}
        }else{
          return item
        }

      })
    })

  }

  function rollDice(){
    
    setDice(prevDice =>{

      return prevDice.map(item =>{
        return item.isHeld ? item : generateNewDice()
      })

    })

  }

  function resetGame(){
    setTenzies(false)
    setDice(all NewDice())
  }

  React.useEffect(() => {

    var result = dice.every((item, index, array) =>{
      if(item.isHeld)
      {
        return item.number === array[0].number ? true : false
      }else{
        return false
      }

    })
    
    if(result)
    {
      setTenzies(true)
      console.log("You win")
    }

  }, [dice])


  var diceElements = dice.map((item, index) =>{
  
    return <Die key={index} isHeld={item.isHeld} number={item.number} holdDiceToggler={holdDice} id={item.id}/>

  })
  

  return (
    <main className="container">
      {tenzies && <Confetti /> }
      <h1 className="title">Tenzies</h1>
      <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceElements}
      </div>
      <button className="roll-button" onClick={() => tenzies ? resetGame() : rollDice()}>{tenzies ? 'New Game' : 'Roll!'}</button>

    </main>
  );
}



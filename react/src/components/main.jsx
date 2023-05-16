import React from 'react'
import Die from './die'
import { nanoid } from 'nanoid'

export default function Main(){

    const [dice, setDice] = React.useState(GenerateDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=>{
        const Selected = dice.every(die=>die.selected)
        const chosen = dice[0].value
        const confirm = dice.every(die => die.value === chosen)
        if (Selected && confirm) {
            setTenzies(true)
            console.log('EPIC VICTORY')
        }}, [dice])

    function HoldDice(id){
        setDice(old => old.map(die => { //mapping out all the dice
            return die.id === id ? {...die, selected: !die.selected} : die //If die.id equals to id then we flip that dice's "selected", else, normal dice
        }))
    }

    function NewDie(){
        return {
            selected: false,
            value: Math.ceil(Math.random() * 6),
            id: nanoid()
        }
    }

    function GenerateDice(){ //Function to generate ALL the dice!
        const newDice = []
        for (let i=0;i<10;i++){
            newDice.push(NewDie())
        }
        return newDice
    }

    function Restart(){ //Restart function
        setTenzies(false)
        setDice(GenerateDice)
        console.log('hello')
    }

    function Toggle(){
        setDice(old => old.map(die => {
            return die.selected ? die : NewDie()
        }))
    }

    const DiceEl = dice.map(die => <Die value={die.value} key={die.id} selected={die.selected} hold={()=>HoldDice(die.id)}/>)

    return(
        <div id='MainFrame'>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div id='Game'>
                {DiceEl}
            </div>
            <button id='Roll' onClick={!tenzies ? Toggle : Restart}>{tenzies ? 'New Game' : 'Roll'}</button>
        </div>
    )
}
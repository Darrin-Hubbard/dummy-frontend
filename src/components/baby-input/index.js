import React, {useState} from 'react'
import BabyService from '../../services/baby'

function BabyInput(){
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    function submit(e) {
        e.preventDefault();
        console.log("FIRE!", firstName, middleName, lastName)
        BabyService.createBaby(firstName, middleName, lastName)
    }
    function change(func, value){
        func(value)
    }
    return (
        <form onSubmit={submit}>
            <input type="text" value={firstName} onChange={(e)=>{change(setFirstName, e.target.value)}} />
            <input type="text" value={middleName} onChange={(e)=>{change(setMiddleName, e.target.value)}} />
            <input type="text" value={lastName} onChange={(e)=>{change(setLastName, e.target.value)}} />
            <button>Submit</button>
        </form>
    )
}

export default BabyInput;
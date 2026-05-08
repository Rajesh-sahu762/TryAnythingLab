import React, { useState } from 'react'

const State = () => {


const [Num, setNum] = useState(0)

const [Users, setUsers] = useState("Rajesh")

// working with array

const [Group, setGroup] = useState(['Rajesh','Anshul','divyanshu','kartik','vansh'])

function increase() {
    setNum(Num+1)
}

function changeName() {
    setUsers("Anshul")
}


  return (
   <>
   <h1> value of num is {Num}   </h1>
   <h1> name of user is {Users} </h1>
   <h1> Group members are : {Group} </h1>
    <button onClick={increase}>increase</button>
    <button onClick={changeName}>changeName</button>
   </>
  )
}

export default State

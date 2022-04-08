import React, { useState } from 'react'

function Home() {
  const[myTitle, setTitle] = useState("Mon super titre")
  const handleClick=()=>{
    setTitle("Mon application")
  }

  
  
  const ChangeValue = (event) => {
    setTitle(e.target.value)
  }


  const handleClickParam=(name)=>{
    console.log("I'm clicked");
    alert('Your name '+ name)
  }
  return (
    <div>
   
      <h1>{myTitle}</h1>
      <input type='text' onChange={(e) =>ChangeValue(e)} value={myTitle}></input>
      <button className='btn btn-info' value={myTitle} onClick={handleClick}>Cliquez ici</button>
      <button className='btn btn-succes' onClick={ () =>{handleClickParam('Angela')}}>Envoyer</button>

    </div>
  )
}

export default Home
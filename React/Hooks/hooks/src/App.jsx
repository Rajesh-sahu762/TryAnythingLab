import React from 'react'
// import State from './Hook-understanding/useState/state'


const App = () => {

  const formHandling = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }


  return (
   <>

   <form onSubmit={ (e) => {
    formHandling(e)
   }}>
    <input type="text" placeholder='enter name' />
    <button>submit</button>

   </form>
  
    {/* <State /> */}
   </>
  )
}

export default App

import { useState } from "react"


const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')


  const formHandling = (e) => {
    e.preventDefault()
    console.log(title,detail)
    setTitle('')
    setDetail('')
  }


  return (
    <>
    <div className="w-screen lg:w-full flex flex-wrap ">
    <form className="flex flex-col w-1/2 gap-10 p-10" onSubmit={(e) => {
      formHandling(e)
    }}>

      <h1 className="font-bold text-3xl ">Add Notes</h1>

      <input type="text" placeholder="Enter Title" value={title} onChange={(e) => {
      setTitle(e.target.value)
      }} />


      <textarea type="text" placeholder="Enter Details" value={detail} onChange={(e) => {
        setDetail(e.target.value)
      }} />
      <button className="bg-white rounded-2xl text-black font-bold p-3 cursor-pointer">Add Note</button>

    </form>



    <div className="w-1/2 flex flex-wrap">
    <h1 className="p-10 font-bold text-3xl">Recent Notes</h1>
    <div className="recent flex flex-wrap gap-10">
    <div className="cards bg-white h-73 w-3xs rounded-2xl "></div>
    <div className="cards bg-white h-73 w-3xs rounded-2xl "></div>
    <div className="cards bg-white h-73 w-3xs rounded-2xl "></div>
    <div className="cards bg-white h-73 w-3xs rounded-2xl "></div>
</div>
    </div>

</div> 


     
    </>
  )
}

export default App

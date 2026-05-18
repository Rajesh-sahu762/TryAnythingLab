import { useState } from "react"


const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  


  const formHandling = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({
      title : title,
      detail : detail
    })

    setTask(copyTask)
    // console.log(task)

    setTitle('')
    setDetail('')
  }


  const deleteNote =(idx) => {
    const copyTask = [...task]
  
    copyTask.splice(idx,1)

    setTask(copyTask)

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



    <div className="w-1/2 flex flex-wrap relative">
    <h1 className="p-10 font-bold text-3xl">Recent Notes</h1>
    <div className="recent flex absolute top-25 left-10 justify-start flex-wrap gap-10">

    {task.map(function(elem,idx){
      return  <div key={idx} className="cards justify-between flex flex-col items-start bg-white h-73 w-3xs rounded-2xl ">
        <div>
      <h3 className="text-black font-bold text-left p-5 pb-0 leading-tight text-3xl">{elem.title}</h3>
      <p className="text-gray-500 leading-tight p-6 pt-2 text-left " >{elem.detail}</p>
      </div>
      
      <button className="bg-red-800 text-white text-center place-self-center cursor-pointer mb-8 px-4 p-2 rounded" onClick={()=> {
        deleteNote(idx)
      }}>delete Note</button>
    </div>
    })}

   
   
</div>
    </div>

</div> 


     
    </>
  )
}

export default App

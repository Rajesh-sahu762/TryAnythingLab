import Cards from "./Components/Cards"

const App = () => {
  return (
    <>
    <div className="parent">
     <Cards user="Rajesh" age={25} img="https://images.unsplash.com/photo-1774248833635-1e0aa8c7c864?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <Cards user="Priya" age={30} img="https://images.unsplash.com/photo-1774248833635-1e0aa8c7c864?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <Cards user="Amit" age={35} img="https://images.unsplash.com/photo-1774248833635-1e0aa8c7c864?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <Cards user="Sneha" age={40} img="https://images.unsplash.com/photo-1774248833635-1e0aa8c7c864?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     </div>
    </>
  )
}

export default App

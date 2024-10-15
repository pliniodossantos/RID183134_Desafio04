import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  './assets/global.css'
import { Home, Project, Tech, About } from "./pages"






function App() {
  
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projetos" element={<Project />}/>
          <Route path="/tecnologias" element={<Tech />}/>
          <Route path="/sobre" element={<About/>}/>

        </Routes>
      </Router>

  

 
    </>
  )
}

export default App

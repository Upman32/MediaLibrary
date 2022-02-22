import Header from './components/Header'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './components/Content/Main'
import Media from './components/Content/Media'
import About from './components/Content/About'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App


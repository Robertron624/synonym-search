import { useState } from 'react'
import { Header } from './components/Header/Header'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <Header />
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center main_content'>
        <div className="greetings">
          <h1 className='mb-5'>Synonym Searcher App !</h1>
          <p className='mb-5'>With this app you will get a list of synoyms according to what you type down</p>
        </div>
        <div className="search__area d-flex">
          <input type="text" name="" id=""/> <button className='btn btn-primary' type="submit">Search</button>
        </div>
      </div>
    </>
  )
}

export default App

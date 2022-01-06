import { useState } from 'react'
import CreateItem from './components/CreateItem'
import Footer from './components/Footer'
import Header from './components/Header'
import Item from './components/Item'


function App() {

  return (
    <div className="App">
      <Header/>
        <CreateItem/>
        <Item/>
      <Footer/>
    </div>
  )
}

export default App

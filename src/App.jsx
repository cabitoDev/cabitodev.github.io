import { React, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState()

  const getRandomQuote = () => {
    fetch('https://chiquitadas.es/api/quotes/avoleorrr')
    .then(res=> 
      res.json())
    .then(res=> setQuote(res.quote))
  }
  useEffect(()=>{
    getRandomQuote();
  },[])

  

  return (
    <>
      <div className='quote_box'>
        <div className='qoute_text'>
          {quote}
        </div> 
        <div className='quote_footer'>
          <button>tw</button>
          <button>tm</button>
          <button onClick={getRandomQuote}>New quote</button>
        </div>
      </div>
    </>
  )
}

export default App

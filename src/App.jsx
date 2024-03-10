import { React, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'ZeGPaQg9U82qmWBZ1tPRtQ==MQRnplX2kD1Bw9hd',
    },
    contentType: 'application/json',
  };

  const getRandomQuote = () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category', requestOptions)
    .then(res=> 
      res.json())
    .then(res=> {
      setQuote(res[0].quote);
    setAuthor(res[0].author)})
  }
  useEffect(()=>{
    getRandomQuote();
  },[])

  

  return (
    <>
      <div className='quote'>
        <div className='quote_box'>
        <div className='qoute_text'>
          {quote}
        </div> 
        <div className='qoute_author'>
          {author}
        </div> 
        </div>
        <div className='quote_footer'>
          
          <a href={`https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`} target="_blank" rel="noreferrer">
          <button>Twit it</button>
          </a>

          <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} target="_blank" rel="noreferrer">
          <button>Twit it</button>
          </a>
            
          <button onClick={getRandomQuote}>New quote</button>
        </div>
      </div>
    </>
  )
}

export default App

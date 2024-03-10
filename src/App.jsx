import { React, useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [animate, setAnimate] = useState({ opacity: 1, y: 0 });

  const requestOptions = {
    method: "GET",
    headers: {
      "X-Api-Key": "ZeGPaQg9U82qmWBZ1tPRtQ==MQRnplX2kD1Bw9hd",
    },
    contentType: "application/json",
  };

  const getRandomQuote = () => {
    setAnimate({ opacity: 0, y: 1 });
    fetch("https://api.api-ninjas.com/v1/quotes?category", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setQuote(res[0].quote);
        setAuthor(res[0].author);
        setAnimate({ opacity: 1, y: 0 });
      });
  };
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
      <div id="quote-box" className="quote">
        <motion.div 
          key={quote}
          className="quote_box"
          initial={{ opacity: 0, y: -20 }}
          animate={animate}
          transition={{ duration: 0.5 }}
        >
          <div id="text" className="quote_text">{quote}</div>
          <div id="author" className="quote_author">{author}</div>
        </motion.div>
        <div className="quote_footer">
          <div className="quote_social">
            <a id="tweet-quote"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <img src="/src/assets/twitter.svg" />
              </button>
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <img src="/src/assets/tumblr.svg" />
              </button>
            </a>
          </div>
          <button id="new-quote" onClick={getRandomQuote}>New quote</button>
        </div>
      </div>
  );
}

export default App;

import React,{useEffect, useState} from 'react'
import axios from 'axios';

export default function Main() {
   
     
    const [post, setPost] = useState({
        quote: 'Welcome to your favourite quote site',
        author:''
    });
   

    var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

   
        
        const fetch = async () =>{
            try{
             const res=   await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
             const quotesData = res.data;
            
             const quoted = quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];

                // console.log(quoted.author)
                // console.log(quoted.quote)
                setPost({quote:quoted.quote,
                    author:quoted.author})

                    var color = Math.floor(Math.random() * colors.length);
                    console.log(colors[color])

                  
                    // document.getElementsByTagName("span").style.color = colors[color];
                    document.body.style.backgroundColor = colors[color];
                
              }catch(err)
              {
                console.error(err)
             }        
          }   
              
       
   

    
    return (
        <div>
            <div id="quote-box">
                <div id="text" >
                <span>" {post.quote}</span>
                </div>
                <div id="author">
                <span>{post.author}</span>     
                </div>
                <div className="float">
                 <span id="new-quote" onClick={() => fetch()} >  New quote</span> 


                 <a className="twitter-share-button"
                     href={`https://twitter.com/intent/tweet?text=${post.quote}`}> <span id="tweet-quote" ><i className="fab fa-twitter-square"></i></span></a>
                </div>
            </div>
               

        </div>
    )
}

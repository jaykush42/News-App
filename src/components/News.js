import React from 'react'
import './News.css'
function News({news}) {
  return (
    <div className="news-card">
       <a href={news.url} target='_blank'> <img src={news.image} alt={news.title} />
       </a>
         <h2>{news.title}</h2>
        <p>{news.description}</p>
        <button className='btn-read-more' onClick={()=>window.open(news.url)}>Read More</button>
    </div>
  )
}
export default News
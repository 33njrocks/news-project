import React, { Component ,useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewArticles.css';
import {Link} from 'react-router-dom'
function NewsAticles() {

  const [data,setData] = useState([])
  const [category,setCategory] = useState('general')

  function getNewsArticles(){
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=838e20e7e3e245dc89e65f91ab8c3632`)
    .then(response => {
      console.log(response)
      setData(response.data.articles)
      
    })
  }
  useEffect(() => {
    getNewsArticles();
    },[category]);
  return (
    <div className='container'>
      <div className='row'>
        <div className='business-category'>
          <ul className='category'>
              <li><button onClick={()=>setCategory('general')}>General</button></li>
              {/* <li><Link to="/general">General</Link></li> */}
              <li><button onClick={()=>setCategory('business')}>Business</button></li>
              <li><button onClick={()=>setCategory('sports')}>Sports</button></li>
              <li><button onClick={()=>setCategory('entertainment')}>Entertainment</button></li>
              <li><button onClick={()=>setCategory('science')}>Science</button></li>
              <li><button onClick={()=>setCategory('technology')}>Technology</button></li>
              <li><button onClick={()=>setCategory('health')}>Health</button></li>
          </ul>
        </div>
          {
              data.map((value,index)=>(
                  value.urlToImage ? (
                      <div className="col-3" key={index}>
                          <div className="card" style={{width: "15rem"}}>
                              <img src={value.urlToImage} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">{value.title}</h5>
                                  <p className="card-text">{value.description}</p>
                                  <a href="#" className="btn btn-primary">Main News</a>
                              </div>
                          </div>
                      </div>
                    
                   ): <></>
              ))
          }
      </div>
    </div>
  )
}

export default NewsAticles

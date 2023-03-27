import React, { useEffect, useState } from "react";
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from "../../axios";
import './Banner.css';

function Banner() {
  function truncate(string,n){
    return string?.length>n?string.substr(0,n-1)+'...':string;
  }
  const [movie,setMovie] = useState()
    useEffect(()=>{ 
         axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{  
          console.log(response.data.results);  
          function getRandomIndex() {
            return Math.floor(Math.random() * response.data.results.length) + 1;
          }
          const randomIndex = getRandomIndex();
          setMovie(response.data.results[randomIndex])
        })
    },[])
  

  return (
    
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}  className="banner">
     <div className="fade_top" ></div>
      <div className="content">
        <h1 className="title">{movie? movie.title||movie.name : ''}</h1>
        
        <h1 className="description">
        {truncate(movie? movie.overview :"",250)}</h1>
        <div className="header_buttons" style={{marginTop:movie && movie.overview.length>250?'15px':''}}>
                    <button className="header_button play_button">
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z' fill='currentColor'></path>
                        </svg>Play</button>
                    <button className="header_button more_info_button">
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule='evenodd' clipRule='evenodd' d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z' fill='currentColor'></path>
                        </svg>More Info</button>
                </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

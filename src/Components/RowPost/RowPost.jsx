import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import {API_KEY} from '../../constants/constants'
function RowPost(props) {
  const [movies,setMovies] =useState([]);
  const [urlid,setUrlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      
      setMovies(response.data.results);
    })
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1 ,
    },
  };
const handleMovieTrailer =(id)=>{
  axios.get(`/movie/${id}
  /videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length !== 0){
        setUrlId(response.data.results[0]);
    }else{
      console.log("no trailer");
    }

  })


}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj,index)=>
          <img key={index} onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall?'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        
        )}
        
      </div>
      { urlid && <Youtube videoId={urlid.key} opts={opts}/>}
    </div>
  )
}

export default RowPost

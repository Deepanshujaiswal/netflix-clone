import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


const base_Url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    //A snippet of code which runs based on specific condition
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request)
            return request;
            //"https://api.themoviedb.org/3"+fecthUrl from

        };
        fetchData();


    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {//url
            autoplay: 1,
        },
    }

     const handleClick = (movie) => {
         if (trailerUrl) {
             setTrailerUrl("");
         } else {
             movieTrailer(movie?.title || "")//not name title
                 .then((url) => {
                     console.log ( "the url is" + url)
                     const urlParams = new URLSearchParams(new URL(url).search);
                     setTrailerUrl(urlParams.get('v'));
                     console.log(movies)
                 })
                .catch((error) => console.log("this is the error"+error));
         }
     }

    return (
        <div className='row'>
             <h2>{title}</h2>
            
            {<div className='row_posters '>
                {movies.map((movie)=>
                (
                        <img
                            key={movie.id}
                             onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_Url}${ isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.title} />
                ))}

            </div>}

            {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}    
        </div>
    )
}

export default Row

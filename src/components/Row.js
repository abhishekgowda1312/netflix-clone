import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    //!movies state
    const [movies, setMovies] = useState([])
    //?trailerUrl state
    const [trailerUrl, setTrailerUrl] = useState("")
    //* A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //* if [] , run once when the row loads &then don't run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            //! this is how the request is generated -> https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            setMovies(request.data.results)
            return request

        }
        fetchData()
    }, [fetchUrl])

    //?options for the youtube video trailers
    const opts = {
        height: "390",
        width: "50%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {

            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                }).catch((error) => console.log(error))
        }
    }

    return (
        <div className="row">
            {/* //? title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {/* //?several row__poster(s) */}

                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && " row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name} />
                ))}

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

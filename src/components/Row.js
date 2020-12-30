import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    //!movies state
    const [movies, setMovies] = useState([])

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


    return (
        <div className="row">
            {/* //? title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {/* //?several row__poster(s) */}

                {movies.map(movie => (
                    <img
                        className={`row__poster ${isLargeRow && " row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name} />
                ))}

            </div>

        </div>
    )
}

export default Row

import { useState } from "react";
import Navigation from "../components/Navigation";
import Animecard from "../components/Animecard";
import { Link } from "react-router-dom";
import { getAnimeByGenre } from "../services/jikanApi";
import useAnimeStore from "../store/store";

function Browsepage() {
    const{genreData, genreloading, setGenreData, setGenreLoading} = useAnimeStore() //store valuse from the store js file and setvalues as well

    useEffect(() => {
        const fetchAllGenres = async () => {
            setGenreLoading(true)

            try{
                for (const[genreName, genreId] of Object.entries(GENRES)) {
                    const response = await getAnimeByGenre(genreId)
                    const animeArray = response.data
                    setGenreData(genreName, animeArray)
                }
            }
            catch(error) {
                console.log(error)
            }
            finally {
                setGenreLoading(false)
            }
        }
        fetchAllGenres()
    }, []) 
}

export default Browsepage;

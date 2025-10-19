import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Animecard from "../components/Animecard";
import { Link } from "react-router-dom";
import { getAnimeByGenre } from "../services/jikanApi";
import useAnimeStore from "../store/store";

function Browsepage() {
    const{genreData, genreLoading, setGenreData, setGenreLoading} = useAnimeStore() //store valuse from the store js file and setvalues as well
    const GENRES = {
        action: 1,
        comedy: 4,
        drama: 8,
        fantasy: 10,
        romance: 22,
    }
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

    return (
        <div className="min-h-screen">
            <Navigation />

            <div>
                <p>
                    Welcome to nexus. your best spot for everything anime. here find the top animes from each genre available
                    click it read it and decide to watch it.
                </p>

                {!genreLoading && (
                    <div>
                        <h3>Action</h3>

                        <div>
                            {genreData.action && genreData.action.map((anime) => {
                                <Link key = {anime.mal_id} to={`/anime/${anime.mal_id}`}>
                                    <Animecard anime = {anime} onClick={() => {}} />
                                </Link>
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Browsepage;

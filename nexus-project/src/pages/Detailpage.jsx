import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { getAnimeById } from "../services/jikanApi";
import useAnimeStore from "../store/store";
import { useParams } from 'react-router-dom';

function Detailpage () {
    const { id } = useParams();  //gets id from url for example /anime/5 hence yrl is 5

    const {
        selectedAnime, setSelectedAnime, 
        setSelectedAnimeLoading, setSelectedAnimeError
    } = useAnimeStore() //store values from zustand

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            setSelectedAnimeLoading(true) //loading state set to true

            try {
                const response = await getAnimeById(id) //getting anime by id from the API
                setSelectedAnime(response.data) //storing it in the store
            }
            catch(error) {
                setSelectedAnimeError(error.message) //handling errors incase theres an error 
            }
            finally {
                setSelectedAnimeLoading(false)
            }
        }
        fetchAnimeDetails()
    }, [id]); // the array with id just means rerun if id changes

    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="Container">
                {selectedAnime ? (
                    <>
                        {selectedAnime.images?.jpg?.large_image_url && (
                            <img 
                                src={selectedAnime.images.jpg.large_image_url}
                                alt={selectedAnime.title} 
                                className="h-90 w-150 rounded-lg"
                            />
                        )}

                        <h1 className="font-bold">{selectedAnime.title}</h1>

                        <p>{selectedAnime.synopsis}</p>

                        <p>
                            <span className="font-semibold mr-2">Release year:</span>
                            {selectedAnime.year || 'N/A'}
                        </p>

                        <p>
                            <span className="font-semibold mr-2">Airing Status:</span>
                            {selectedAnime.status}
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    )
}

export default Detailpage


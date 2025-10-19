// Required React and third-party imports
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { getAnimeById } from "../services/jikanApi";
import useAnimeStore from "../store/store";
import { useParams } from 'react-router-dom';

function Detailpage () {
    // Extract the anime ID from the URL parameters for instance (/anime/5)
    const { id } = useParams();

    // Get state and actions from our Zustand store
    const {
        selectedAnime, setSelectedAnime,   // selectedAnime: Current anime data   // setSelectedAnime: Function to update anime data
        setSelectedAnimeLoading, setSelectedAnimeError // setSelectedAnimeLoading: Function to set loading state // setSelectedAnimeError: Function to set error state
    } = useAnimeStore();

    // useEffect hook to fetch anime details when the component mounts or ID changes
    useEffect(() => {
        const fetchAnimeDetails = async () => {

            setSelectedAnimeLoading(true);

            try {
                const response = await getAnimeById(id); // Fetch anime data from the Jikan API
                
                setSelectedAnime(response.data); // Update the store with the fetched data
            }
            catch(error) {
                
                setSelectedAnimeError(error.message); // error handling
            }
            finally {
                setSelectedAnimeLoading(false); // loading state reset regardless
            }
        }
        fetchAnimeDetails();
    }, [id]); // run again when id changes

    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="Container mx-auto px-4 py-8">
                {/* Conditional rendering based on whether anime data is loaded */}
                {selectedAnime ? (
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        {/* Anime image - only shown if image URL exists */}
                        {selectedAnime.images?.jpg?.large_image_url && (
                            <img 
                                src={selectedAnime.images.jpg.large_image_url}
                                alt={selectedAnime.title} 
                                className=" w-64 h-auto rounded-lg shadow-md mb-4 md:mb-0"
                            />
                        )}

                        <div className="flex-1 flex-col gap-4">
                            <h1 className="font-bold text-2xl">{selectedAnime.title}</h1> {/* Anime title */}

                            
                            <p className="text-gray-300">{selectedAnime.synopsis}</p> {/* Anime synopsis/description */}

                            
                            <p>
                                <span className="font-semibold mr-2">Release year:</span> {/* Release year - shows N/A if year is not available */}
                                {selectedAnime.year || 'N/A'}
                            </p>

                            <p>
                                <span className="font-semibold mr-2">Airing Status:</span> {/* Current airing status */}
                                {selectedAnime.status}
                            </p>

                            <h2 className="font-semibold text-lg">Episodes</h2>
                            <p>
                                Total Episodes: {selectedAnime.episodes}
                            </p>
                        </div>
                    </div>
                ) : (
                    // Loading state when data is being fetched
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Detailpage


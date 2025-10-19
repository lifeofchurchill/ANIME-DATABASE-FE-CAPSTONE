// Required React and third-party imports
import { useEffect } from "react";
import Navigation from "../components/Navigation";
// NEW FEATURE: Import getAnimeEpisodes for fetching episode data
import { getAnimeById, getAnimeEpisodes } from "../services/jikanApi";
import useAnimeStore from "../store/store";
import { useParams } from 'react-router-dom';

function Detailpage () {
    // Extract the anime ID from the URL parameters for instance (/anime/5)
    const { id } = useParams();

    // Get state and actions from our Zustand store
    // Get state and actions from our Zustand store
    const {
        selectedAnime, setSelectedAnime,
        setSelectedAnimeLoading, setSelectedAnimeError,
        // NEW FEATURE: Episodes state and actions
        episodes, setEpisodes,
        setEpisodesLoading, setEpisodesError
    } = useAnimeStore();

    // useEffect hook to fetch anime details when the component mounts or ID changes
    useEffect(() => {
        const fetchData = async () => {
            setSelectedAnimeLoading(true);
            // NEW FEATURE: Set episodes loading state
            setEpisodesLoading(true);

            try {
                // NEW FEATURE: Fetch both anime details and episodes in parallel for better performance
                const [animeResponse, episodesResponse] = await Promise.all([
                    getAnimeById(id),
                    getAnimeEpisodes(id) // NEW FEATURE: Fetch episodes data
                ]);
                
                setSelectedAnime(animeResponse.data);
                // NEW FEATURE: Store episodes data in state
                setEpisodes(episodesResponse.data);
            }
            catch(error) {
                setSelectedAnimeError(error.message);
                // NEW FEATURE: Handle episodes fetch errors
                setEpisodesError(error.message);
            }
            finally {
                setSelectedAnimeLoading(false);
                // NEW FEATURE: Reset episodes loading state
                setEpisodesLoading(false);
            }
        }
        fetchData();
    }, [id]);

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

                            {/* NEW FEATURE: Episodes List Section */}
                            <h2 className="font-semibold text-lg mb-2">Episodes</h2>
                            <p className="mb-4">Total Episodes: {selectedAnime.episodes}</p>
                            {/* NEW FEATURE: Scrollable episodes list with fixed height */}
                            <div className="max-h-96 overflow-y-auto pr-4 space-y-2">
                                {/* NEW FEATURE: Map through episodes and display each one */}
                                {episodes?.map((episode) => (
                                    <div key={episode.mal_id} className="bg-gray-800 p-3 rounded-lg">
                                        <h3 className="font-medium">Episode {episode.episode}: {episode.title}</h3>
                                        {/* NEW FEATURE: Show air date if available */}
                                        {episode.aired && (
                                            <p className="text-sm text-gray-400">
                                                Aired: {new Date(episode.aired).toLocaleDateString()}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
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


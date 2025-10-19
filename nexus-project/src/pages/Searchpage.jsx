import { useState } from "react";
import Navigation from "../components/Navigation";
import Animecard from "../components/Animecard";
import { Link } from "react-router-dom";
import { searchAnime } from "../services/jikanApi";
import useAnimeStore from "../store/store";
import search from "../components/images/search.jfif";

function Searchpage() {
    const [query, setQuery] = useState("");

    const {
        searchResults,      //array of search results
        searchError,        //error message if any
        searchLoading,      //loading state
        setSearchResults,   //function to set search results
        setSearchError,     // function to set error message
        setSearchLoading,   //function to set loading 
    } = useAnimeStore();

    //handle search button function
    const handleSearch = async (e) => {
        e?.preventDefault(); //prevent default submission
        if (!query) {
            setSearchError('Please enter an anime to search for') 
            return 
        }
        setSearchLoading(true); //trrue means loading is in progress
        setSearchError(null); //null means no error and clears previous errors
        try {
            const response = await searchAnime(query); //call the searchAnime function from the Api service i created
            setSearchResults(response.data || []);  //store the results in the global state
        } catch (error) {
            setSearchError(error.message || "An error occurred");
        } finally {
            setSearchLoading(false); //after the search is done return loading to false meaning loading is done
        }
    };

    return (
        <div className=" min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${search})` }}>
            <Navigation />

            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input 
                            type="text" 
                            placeholder="Search anime"
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            className="w-full sm:flex-1 px-4 py-3 rounded-lg text-black shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button 
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg 
                                     hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 
                                     shadow-lg hover:shadow-xl font-semibold"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {searchLoading && (
                    <div className="text-center text-white text-lg py-8">Loading...</div>
                )}

                {searchError && (
                    <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg my-4">{searchError}</div>
                )}

                {!searchLoading && searchResults.length > 0 && (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
                        {searchResults.map((anime) => (
                            <Link 
                                to={`/anime/${anime.mal_id}`} 
                                key={anime.mal_id}
                                className="transform hover:scale-105 transition-all duration-200"
                            >
                                <Animecard anime={anime} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )

}

export default Searchpage;

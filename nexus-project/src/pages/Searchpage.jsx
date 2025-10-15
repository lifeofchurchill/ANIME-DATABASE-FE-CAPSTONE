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

            <div className="container mx-4 py-4 px-4"> //container for the search page
               
                ////div for the search form
                <div className="flex justify-center"> 
                    <input type="text" 
                    placeholder="Search anime"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} className="w-full max-w-md px-4 py-2 rounded-lg text-black" />
                </div>
                <button onClick={ handleSearch } className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-900">
                    Search
                </button>
            </div>

            {searchLoading && (
                <div className="text-center text-white">Loading...</div>
            )}

            {searchError && (
                <div className="text-center text-red-500">{searchError}</div>
            )}

            //if user searches and there are results display them since they are not loading and there are results
            {!searchLoading && searchResults.length > 0 && (
                <div className="grid gap-4">
                    {searchResults.map((anime) => (   //map through the results and display each card
                        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}> //link to the detailed page of the the anime teh user selects
                            <Animecard anime={anime} /> //for displaying each anime card
                        </Link>
                    ))}
                </div>
            )}

        </div>
    )

}

export default Searchpage;

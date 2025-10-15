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

            <div className="container mt-4">
                <form onSubmit={handleSearch} className="flex justify-center">
                    <div>
                        <input type="text" 
                        placeholder="Search anime"
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} className="w-full max-w-md px-2 py-2 rounded-lg" />
                    </div>
                    <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                        Search
                    </button>
                </form>
            </div>
            
        </div>
    )

}

export default Searchpage;

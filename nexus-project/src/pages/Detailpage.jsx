import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { getAnimeById } from "../services/jikanApi";
import useAnimeStore from "../store/store";
import { useParams } from 'react-router-dom';

function Detailpage () {
    const { id } = useParams();  //gets id from url for example /anime/5 hence yrl is 5

    const {
        selectedAnime, detailLoading, 
        detailError, setSelectedAnime, 
        setSelectedAnimeLoading, setSelectedAnimeError
    } = useAnimeStore() //store values from zustand

    useEffect(() => {
        const fetchAnimeDetails = async () => {
            setSelectedAnimeLoading(true) //loading state set to true

            try {
                const response = await getAnimeById(id) //getting anime by id from the API

                const animeData = response.data() //extracting the data from the response the API gives me

                setSelectedAnime(animeData) //storing it in the store
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
}


const BASE_URL = 'https://api.jikan.moe/v4'; //wrapped the api base url in a constant

export const searchAnime = async (query) => {
    const response = await fetch(`${BASE_URL}/anime?q=${query}&limit=5`); 
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`) //error handling the response the api gives
    }
    const data = await response.json();
    return data; //returning the data
};

export const getAnimeById = async (id) => {
    const detailsResponse = await fetch(`${BASE_URL}/anime/${id}/full`) //gets full details of an anime by its id
    if(!detailsResponse.ok) {
        throw new Error(`HTTP ${detailsResponse.status}: ${detailsResponse.statusText}`) //error handling the response the api gives
    }
    const detailsData = await detailsResponse.json();
    return detailsData; //returning the data
}

export const getAnimeByGenre = async (genreID) => {
    const genreResponse = await fetch(`${BASE_URL}/anime?genres=${genreID}&limit=10&order_by=score&sort=desc`) //get anime by genre id
    if (!genreResponse.ok) {
        throw new Error(`HTTP ${genreResponse.status}: ${genreResponse.statusText}`) //error handling the response the api gives
    }
    const dataResponse = await genreResponse.json();
    return dataResponse; //returning the data
}

// NEW FEATURE: Fetch anime episodes list
export const getAnimeEpisodes = async (id) => {
    // added this enpoint for a list of episodes of a particular anime after realizing jikan supports it
    const episodesResponse = await fetch(`${BASE_URL}/anime/${id}/episodes`)
    if (!episodesResponse.ok) {
        throw new Error(`HTTP ${episodesResponse.status}: ${episodesResponse.statusText}`)
    }
    const episodesData = await episodesResponse.json();
    return episodesData;
}

export default BASE_URL;


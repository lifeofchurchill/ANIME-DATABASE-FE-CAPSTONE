import { create } from 'zustand';

const useAnimeStore = create((set) => ({
    //state for search functionality
    searchQuery: '',
    searchResults: [],
    searchError: null,
    searchLoading: false,

    //state for browse by genre
    genreData: {
        action: [],
        comedy: [],
        drama: [],
        romance: [],
        fantasy: []
    },
    genreLoading: false,
    genreError: null,

    //state for anime details
    selectedAnime: null,
    selectedAnimeLoading: false,
    selectedAnimeError: null,

    //actions for search functionality
    setSearchQuery: (query) => set({searchQuery: query}),
    setSearchResults: (results) => set({searchResults: results}),
    setSearchError: (error) => set({searchError: error}),
    setSearchLoading: (isLoading) => set({searchLoading: isLoading}),

    //actions for browse by genre
    setGenreData: (genre, data) => set((state) => ({  //updtates one genre at a time
        genreData : {
            ...state.genreData, //keeps other genres unchanged
            [genre]: data //updates the specific genre with new data
        }
    })),
    setGenreLoading: (isLoading) => set({genreLoading: isLoading}),
    setGenreError: (error) => set({genreError: error}),


    //actions for anime details
    setSelectedAnime: (anime) => set({selectedAnime: anime}),
    setSelectedAnimeLoading: (isloading) => set({selectedAnimeLoading: isloading}),
    setSelectedAnimeError: (error) => set({selectedAnimeError: error})
}))


export default useAnimeStore;

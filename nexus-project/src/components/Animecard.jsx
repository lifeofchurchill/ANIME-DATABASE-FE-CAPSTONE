function Animecard({anime, onClick}) {
    return (
        <div onClick={onClick} className="cursor-pointer object-cover">
            <img className="w-48 h-60 rounded-sm"  //the anime image from the Api the alt just incase the image doesnt load
            src={anime.images.jpg.image_url} 
            alt={anime.title} />

            <h2 className="text-lg font-bold mt-2">{anime.title}</h2> //displaying the title of the anime
            <p className="text-sm text-gray-600">Score: {anime.score}</p> //displaying the rating of the anime
            <p className="text-sm text-gray-300">{anime.genres?.[0]?.name || 'N/A' }</p> // learnt this from a diffrent soure. basically it checks if the genre array exists and has at least one element, if so it displays the name of the first genre otherwise it displays N/A
            <p className="text-sm text-gray-600">{anime.score || 'N/A'}</p>
            <p className="text-sm text-gray-600">{anime.sypnosis ? (anime.synopsis.length > 50 ? anime.synopsis.slice(0, 100) + '...' : anime.synopsis) : 'N/A'}</p>//displays the synopsis but limits it to 100 characters if its longer than that and adds ... at the end. If no synopsis is available it shows N/A
            
        </div>
    )
}

export default Animecard;

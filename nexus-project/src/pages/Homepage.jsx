import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import itachi from "../components/images/itachi.jpg";

function Homepage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col w-full"
            style={{ backgroundImage: `url(${itachi})` }}
        >
            <Navigation />

            <div className="flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
                <div className="max-w-lg w-full bg-black bg-opacity-50 p-6 rounded-lg">
                    <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-6">
                        Dive into the vibrant world of anime where action meets heart, art meets storytelling,
                        and every frame bursts with creativity.<br className="hidden sm:block" /> Discover stories that push boundaries and
                        inspire millions worldwide.
                    </p>

                    <Link 
                        to="/search" 
                        className="inline-block bg-red-500 px-6 py-3 text-white rounded-lg text-lg font-semibold 
                                 hover:bg-red-600 transform hover:scale-105 transition-all duration-200 
                                 shadow-lg hover:shadow-xl"
                    >
                        EXPLORE
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

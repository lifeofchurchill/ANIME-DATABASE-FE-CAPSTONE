import Navigation from "../components/Navigation"

function About () {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Welcome to Nexus Anime
                    </h1>
                    
                    <div className="space-y-6">
                        <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                            Hi! Welcome to Nexus Anime, your ultimate destination for anime lovers around the world.
                        </p>
                        
                        <div className="text-base sm:text-lg space-y-4 text-gray-400">
                            <p>
                                Imagine wanting to find out about your favorite anime - whether it's still being aired,
                                who voices your favorite characters, or how many episodes that new series has that everyone's talking about.
                                Usually, you'd have to search multiple places just to get these basic details.
                            </p>
                            
                            <p>
                                This is where Nexus comes in! Why go through all that hassle when you can get all related info in one place?
                            </p>
                            
                            <p className="font-semibold text-white">
                                At Nexus, we put you first. That's why we've created this comprehensive anime database - 
                                just search and get all the anime content you need on the go!
                            </p>
                            
                            <p className="text-center font-bold text-xl text-yellow-500 mt-8">
                                !!!HOOOOOORAYYYYYYYY!!!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import { Link } from "react-router-dom";


function Navigation() {
    return (
        <nav className="flex justify-between items-center p-4">
            <Link to="/" className="font-myfont text-white-5xl w-40 h-5 bg-white">NexusAnime</Link>
            <ul>
                <li className="inline-block mx-4">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                </li>
                <li className="inline-block mx-4">
                    <Link to="/browse" className="text-white hover:text-gray-400">Browse</Link>
                </li>
                <li className="inline-block mx-4">
                    <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;

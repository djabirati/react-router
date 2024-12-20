import React from "react";
import {Link} from "react-router";

export function Navbar() {
    const [isMobile, setIsMobile] = React.useState(false);

    return (
        <nav className="flex justify-between items-center p-4 bg-green-600">
            <ul className={`${isMobile ? 'flex flex-col items-center' : 'hidden md:flex space-x-4'} text-white`}>
                <li>
                    <Link to="/" className="py-2 px-4 rounded-md hover:bg-green-700" onClick={() => setIsMobile(false)}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="py-2 px-4 rounded-md hover:bg-green-700"
                          onClick={() => setIsMobile(false)}>
                        A propos
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="py-2 px-4 rounded-md hover:bg-green-700"
                          onClick={() => setIsMobile(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
            <button
                className="md:hidden flex flex-col justify-between h-6 w-8"
                onClick={() => setIsMobile(!isMobile)}
            >
                <span className="block h-1 w-full bg-white"></span>
                <span className="block h-1 w-full bg-white"></span>
                <span className="block h-1 w-full bg-white"></span>
            </button>
        </nav>
    );
}
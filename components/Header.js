import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Image from "next/image";

const Header = () => {
    const ref = useRef(null);
    useEffect(() => {
        // 👇️ use a ref (best)
        let toggleBtn = document.querySelector("#navbar-toggle");
        let collapse = document.querySelector("#navbar-collapse");
        toggleBtn.onclick = () => {
            collapse.classList.toggle("hidden");
            collapse.classList.toggle("flex");
        };
    }, []);

    return (
        <header className="sticky top-0 bg-white z-10 shadow">
                <nav className="bg-white py-2 md:py-2">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                        <Image src="/logo.png" alt="Logo" width={120} height={5} />                         
                            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <i className="fas fa-bars">Expandir</i>
                            </button>
                        </div>
                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Home</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Novidades</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Sobre</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Equipe</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contato</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white text-center border rounded-full  bg-green-500 hover:bg-green-700 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">WhatsApp</a>
                        </div>
                    </div>
                </nav>
        </header>
    );
};

export default Header;
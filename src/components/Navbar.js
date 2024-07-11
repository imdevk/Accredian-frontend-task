import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-2">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Refer & Earn</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-blue-200">Home</a></li>
                    <li><a href="#how-to-refer" className="hover:text-blue-200">How It Works</a></li>
                    <li><a href="#faq" className="hover:text-blue-200">FAQ</a></li>
                    <li><a href="#" className="hover:text-blue-200">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="min-h-[80vh] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white flex items-center">

            <div className="max-w-5xl mx-auto text-center px-6">

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Welcome to MyWebsite
                </h1>

                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
                    A simple React application built using React Router
                    and Tailwind CSS.
                </p>

                <div className="flex justify-center gap-4">

                    <Link
                        to="/signup"
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/login"
                        className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Home;
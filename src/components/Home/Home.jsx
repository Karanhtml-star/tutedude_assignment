import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="min-h-[80vh] bg-blue-600 text-white flex items-center">

            <div className="max-w-5xl mx-auto text-center px-6">

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Welcome to MyWebsite
                </h1>

                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
                    A simple React application built using React Router
                    and Tailwind CSS.
                </p>


            </div>

        </section>
    );
}

export default Home;

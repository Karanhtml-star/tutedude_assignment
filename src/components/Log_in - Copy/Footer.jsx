import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <h2 className="text-xl font-bold">
                        MyWebsite
                    </h2>

                    <div className="flex gap-6 text-gray-400">
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-white">
                            Terms
                        </a>

                        <a href="#" className="hover:text-white">
                            Contact
                        </a>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} MyWebsite. All rights reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
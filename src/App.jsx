import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div
            className={`font-oswald font-weight-700 ${isDarkMode ? "dark" : "light"}`}
            style={{
                backgroundColor: isDarkMode ? "#1B1E21" : "#FFFFFF",
                color: isDarkMode ? "#C0C0C0" : "#000000",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
            }}
        >
            <div className="container mx-auto max-w-md">
                <h1 className="text-4xl mb-10 text-center">Get in Touch</h1>

                {/* Social Media Icons */}
                <div
                    style={{ backgroundColor: "#2A3036" }}
                    className="flex flex-col items-center w-full text-center p-4 mb-4 bg-gray-700 parent-div"
                >
                    <i className="fab fa-github"></i>
                    <a
                        href="https://github.com/darshan1928"
                        className="text-gray-200 text-decoration-none w-full transition-bg p-2"
                    >
                        GitHub
                    </a>
                </div>
                {/* Other Social Media Icons */}
                <div
                    style={{ backgroundColor: "#2A3036" }}
                    className="flex flex-col items-center w-full text-center p-4 mb-4 bg-gray-700 parent-div"
                >
                    <i className="fab fa-twitter"></i>
                    <a
                        href="https://twitter.com/CallMe_Darshan"
                        className="text-gray-200 text-decoration-none w-full transition-bg p-2"
                    >
                        Twitter
                    </a>
                </div>

                <div
                    style={{ backgroundColor: "#2A3036" }}
                    className="flex flex-col items-center w-full text-center p-4 mb-4 bg-gray-700 parent-div"
                >
                    <i className="fab fa-linkedin"></i>
                    <a
                        href="https://linkedin.com/in/darshanraj1928"
                        className="text-gray-200 text-decoration-none w-full transition-bg p-2"
                    >
                        LinkedIn
                    </a>
                </div>

                <div
                    style={{ backgroundColor: "#2A3036" }}
                    className="flex flex-col items-center w-full text-center p-4 mb-4 bg-gray-700 parent-div"
                >
                    <i className="fab fa-github"></i>
                    <a href="#" className="text-gray-200 text-decoration-none w-full transition-bg p-2">
                        Portfolio
                    </a>
                </div>

                {/* Toggle Button for Dark/Light Mode */}
                <div className="flex justify-center mb-4">
                    <img
                        onClick={toggleDarkMode}
                        style={{ width: "40px", height: "40px" }}
                        src={isDarkMode ? "/sun.png" : "/moon.png"}
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="text-2xl  font-weight-500 text-center py-4">&copy; Darshan</footer>
        </div>
    );
};

export default App;

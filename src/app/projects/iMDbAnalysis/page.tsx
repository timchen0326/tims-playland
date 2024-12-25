import React from "react";
import "./IMDbAnalysis.css"; // External CSS file for additional styles

const IMDbAnalysis: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="imdb-analysis-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Exploring IMDb Ratings and Votes
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Analyzing the relationship between IMDb votes, ratings, language diversity, and release year.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Study</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This analysis examines whether IMDb votes predict higher IMDb ratings while considering factors
                        such as release year and language diversity. Through visualization techniques, patterns are 
                        explored to provide insights into audience and critical perceptions.
                    </p>
                </section>

                {/* Key Insights Section */}
                <section className="insights-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            Scatter plots reveal the relationship between IMDb votes and ratings, segmented by release year and language diversity.
                        </li>
                        <li>
                            Movies released after 2000 generally follow different trends compared to those released earlier.
                        </li>
                        <li>
                            Language diversity impacts IMDb ratings, with single-language movies and multi-language movies showing distinct patterns.
                        </li>
                        <li>
                            Metascores provide a measure of critical reception, encoded by point size in the scatter plot.
                        </li>
                    </ul>
                </section>

                {/* View PDF Section */}
                <section className="download-link mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">View Full Report</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Access the complete study detailing the methodology, visualizations, and results:
                    </p>
                    <div className="text-center mt-4">
                        <a
                            href="/IMDb Analysis.pdf"
                            className="text-blue-600 font-medium hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View PDF Report
                        </a>
                    </div>
                </section>

                {/* Data & Methodology Section */}
                <section className="methodology-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data & Methodology</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The analysis utilizes scatter plots with trendlines fitted using linear regression. Visual encodings such as color, shape, and size were employed to represent release year, language diversity, and metascore, respectively.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Filters were applied to exclude movies with runtimes under 75 minutes, and alpha blending was used to reduce visual clutter while emphasizing patterns and trends.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default IMDbAnalysis;

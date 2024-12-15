import React from "react";
import "./TrafficAnalysis.css"; // External CSS file for additional styles

const TrafficAnalysis: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="traffic-analysis-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Analyzing Traffic Collisions in Toronto
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Exploring temporal and spatial patterns of traffic collisions in Toronto
                        through visual analytics and data storytelling.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Analysis</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This analysis investigates traffic collision patterns across Toronto. Using
                        Tableau visualizations, we identify key trends such as monthly and hourly
                        distributions, travel modes, and neighborhood-level injury data.
                    </p>
                </section>

                {/* Key Insights Section */}
                <section className="insights-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            <strong>Monthly Trends:</strong> Peak injury collisions occur during
                            summer months, with lower counts in winter.
                        </li>
                        <li>
                            <strong>Hourly Trends:</strong> Collisions are most frequent during rush
                            hours (7-9 AM and 4-6 PM).
                        </li>
                        <li>
                            <strong>Travel Modes:</strong> Automobile collisions dominate, but
                            pedestrian and bicycle incidents highlight urban vulnerability.
                        </li>
                        <li>
                            <strong>Neighborhood Patterns:</strong> Specific neighborhoods exhibit
                            higher injury collision rates, demanding focused safety measures.
                        </li>
                    </ul>
                </section>

                {/* Visualization Link Section */}
                <section className="visualization-link mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Interactive Dashboard</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Explore the interactive Tableau dashboard for detailed visual analysis:
                    </p>
                    <div className="text-center mt-4">
                        <a
                            href="https://public.tableau.com/views/TrafficCollisionsinToronto/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                            className="text-blue-600 font-medium hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Tableau Dashboard
                        </a>
                    </div>
                </section>

                {/* Data & Methodology Section */}
                <section className="methodology-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data & Methodology</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This study utilized open data from the City of Toronto, focusing on injury
                        collision reports. Temporal analysis examined distributions by month and
                        hour, while spatial analysis highlighted neighborhood-level trends.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Travel mode categories included <strong>Automobile</strong>, <strong>Bicycle</strong>,
                        <strong>Motorcycle</strong>, and <strong>Pedestrian</strong>. The Tableau
                        dashboard showcases these patterns interactively, offering actionable
                        insights for urban planning.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TrafficAnalysis;
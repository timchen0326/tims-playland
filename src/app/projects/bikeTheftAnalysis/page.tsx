import React from "react";
import "./BikeTheftAnalysis.css"; // External CSS file for additional styles

const BikeTheftAnalysis: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bike-theft-analysis-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Reducing Bike Theft in Toronto
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Insights into bike theft trends in Toronto to help reduce risks and provide actionable solutions.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Study</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This study examines bike thefts in Toronto, analyzing data on locations, cost ranges, bike types,
                        and premise types. It aims to provide strategies for reducing theft risk and guidance on actions
                        to take when bikes are stolen.
                    </p>
                </section>

                {/* Key Insights Section */}
                <section className="insights-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            The top neighborhoods for bike thefts include Waterfront Communities, Bay Street Corridor,
                            and Church-Yonge Corridor.
                        </li>
                        <li>
                            Bike thefts are most frequent between <strong>12–23 o&rsquo;clock</strong>, especially in outside
                            areas and apartments.
                        </li>
                        <li>
                            Regular (RG) and Mountain (MT) bikes in the price range of $101–$900 are the most frequently stolen.
                        </li>
                        <li>
                            Top divisions for reporting bike thefts include D52, D14, and D51, although recovery rates remain low.
                        </li>
                    </ul>
                </section>

                {/* View PDF Section */}
                <section className="download-link mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">View Full Report</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Access the complete study detailing the methodology, visualizations, and recommendations:
                    </p>
                    <div className="text-center mt-4">
                        <a
                            href="/Bike Theft Analysis.pdf"
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
                        The analysis utilized data on reported bike thefts in Toronto, applying heatmaps, bar charts,
                        and statistical analysis to identify trends. Visualizations highlight high-risk areas, theft timing,
                        and common characteristics of stolen bikes.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Limitations include potential underreporting, which may bias results. Recommendations focus on
                        proactive measures such as avoiding high-risk neighborhoods and bike types with higher theft rates.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default BikeTheftAnalysis;

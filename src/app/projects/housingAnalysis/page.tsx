import React from "react";
import "./HousingAnalysis.css"; // External CSS file for additional styles

const HousingAnalysis: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="housing-analysis-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Analyzing Housing Prices
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Exploring the factors that influence housing prices using multiple linear regression models.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Study</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This project investigates key predictors such as lot size, number of rooms, year of construction, and land contour to understand their impact on housing prices. Using data from Ames Iowa, we uncover relationships and trends through statistical modeling.
                    </p>
                </section>

                {/* Key Insights Section */}
                <section className="insights-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            <strong>Lot Size:</strong> Larger lot areas correlate with higher housing prices.
                        </li>
                        <li>
                            <strong>Number of Rooms:</strong> More rooms above ground significantly increase property value.
                        </li>
                        <li>
                            <strong>Year of Remodel:</strong> Recent renovations contribute positively to housing prices.
                        </li>
                        <li>
                            <strong>Land Contour:</strong> Properties on level or hilly terrain are valued higher than others.
                        </li>
                    </ul>
                </section>

                {/* Download Link Section */}
                <section className="download-link mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Download Full Report</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Access the complete study detailing the methodology, statistical models, and results:
                    </p>
                    <div className="text-center mt-4">
                        <a
                            href="/Housing Prices.pdf"
                            className="text-blue-600 font-medium hover:text-blue-700"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            Download PDF Report
                        </a>
                    </div>
                </section>

                {/* Data & Methodology Section */}
                <section className="methodology-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data & Methodology</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The analysis uses the "Ames Iowa Housing Data" with 2,932 observations. We employed multiple linear regression to examine the relationship between predictors and housing prices, ensuring the model satisfies assumptions like linearity and constant variance.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Advanced statistical techniques, including ANOVA and partial F-tests, were used to validate model accuracy and identify significant predictors.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HousingAnalysis;
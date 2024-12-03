import React from "react";
import "./CrimeAnalysis.css"; // External CSS file for additional styles

const CrimeAnalysis: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="crime-analysis-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Examining Violent Crime in Toronto
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Analyzing the contextual and temporal factors influencing violent
                        crimes in Toronto using Bayesian modeling.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Project</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This project examines violent crimes in Toronto by analyzing
                        factors such as premises type and time of day. Using Bayesian
                        logistic regression, the study identifies high-risk locations
                        and periods for violent crimes, providing actionable insights
                        for urban safety planning and crime prevention strategies.
                    </p>
                </section>

                {/* Key Findings Section */}
                <section className="results-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Findings</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            Violent crimes are more likely to occur in <strong>Transit</strong> and{" "}
                            <strong>Outside</strong> locations compared to residential and educational premises.
                        </li>
                        <li>
                            Crimes are more likely to be violent during the <strong>Afternoon</strong> and{" "}
                            <strong>Evening</strong> compared to early mornings.
                        </li>
                        <li>
                            Bayesian logistic regression provided statistically significant results,
                            emphasizing the importance of location and timing in shaping crime dynamics.
                        </li>
                        <li>
                            These findings support targeted urban planning and resource allocation
                            for crime prevention.
                        </li>
                    </ul>
                </section>

                {/* Data & Methodology Section */}
                <section className="methodology-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data & Methodology</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The study utilized the "Major Crime Indicators" dataset from the Toronto
                        Police Service, focusing on crimes reported during the month of July. Bayesian
                        logistic regression was employed to estimate the likelihood of violent crimes,
                        using premises type and time of day as predictors.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        Predictors included premises categories such as <strong>Apartment</strong>,{" "}
                        <strong>Commercial</strong>, <strong>Transit</strong>, and <strong>Outside</strong>,
                        as well as temporal categories like <strong>Morning</strong>,{" "}
                        <strong>Afternoon</strong>, and <strong>Evening</strong>. The model incorporated
                        prior knowledge and uncertainty to provide robust insights into crime dynamics.
                    </p>
                </section>

                {/* GitHub Link Section */}
                <section className="github-link text-center">
                    <p className="text-gray-600">
                        Explore the full analysis and codebase:
                    </p>
                    <a
                        href="https://github.com/timchen0326/crime-analysis-toronto"
                        className="text-blue-600 font-medium hover:text-blue-700"
                    >
                        View GitHub Repository
                    </a>
                </section>
            </div>
        </div>
    );
};

export default CrimeAnalysis;

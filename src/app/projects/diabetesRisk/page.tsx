import React from "react";
import "./DiabetesRisk.css"; // External CSS file for additional styles

const DiabetesRisk: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="diabetes-risk-container p-8">
                {/* Header Section */}
                <header className="header text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 uppercase">
                        Predicting Diabetes Risk Factors
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Exploring the relationships between predictors such as BMI, glucose levels, and the Diabetes Pedigree Function using statistical modeling.
                    </p>
                </header>

                {/* About Section */}
                <section className="about-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">About the Study</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This study investigates how factors like BMI, glucose levels, number of pregnancies, and the Diabetes Pedigree Function contribute to diabetes risk. Using logistic regression models, we uncover significant predictors and their implications for public health.
                    </p>
                </section>

                {/* Key Insights Section */}
                <section className="insights-section mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                        <li>
                            <strong>Pregnancies:</strong> Higher number of pregnancies is linked to increased diabetes risk.
                        </li>
                        <li>
                            <strong>Glucose Levels:</strong> Elevated glucose levels are a critical indicator of diabetes.
                        </li>
                        <li>
                            <strong>BMI:</strong> Obesity is strongly correlated with diabetes risk.
                        </li>
                        <li>
                            <strong>Genetic Factors:</strong> The Diabetes Pedigree Function highlights hereditary influences on diabetes.
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
                            href="/Diabetes Risk.pdf"
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
                        This research utilized a dataset featuring variables such as pregnancies, BMI, insulin levels, and glucose. Logistic regression was used to evaluate the predictive strength of these factors.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        The analysis incorporated advanced statistical techniques, including cross-validation and ROC curve assessment, to ensure robust and accurate predictions.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DiabetesRisk;
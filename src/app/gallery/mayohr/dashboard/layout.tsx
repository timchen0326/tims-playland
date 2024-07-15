'use client'
import React, { ReactNode } from "react";
import './dashboard.css';

const TenantSummariesAndLayout = ({
    bmi,
    jsonEditor,
    piechart,
    table,
    children,
}: {
    bmi: ReactNode;
    jsonEditor: ReactNode;
    piechart: ReactNode;
    table: ReactNode;
    children: ReactNode;
}) => {

    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <h1 className="text-xl font-bold mb-4 text-center animate-fadeIn">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-2 p-2 animate-slideIn">
                <div className="transition-transform duration-300 ease-in-out">
                    {bmi}
                </div>
                <div className="transition-transform duration-300 ease-in-out">
                    {jsonEditor}
                </div>
                <div className=" transition-transform duration-300 ease-in-out">
                    {piechart}
                </div>
                <div className=" transition-transform duration-300 ease-in-out">
                    {table}
                </div>
            </div>
        </div>
    );
};

export default TenantSummariesAndLayout;

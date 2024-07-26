import React, { ReactNode } from "react";
import "./dashboard.css";

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
        <div className="min-h-screen p-2">
            <h1 className="text-xl font-bold mb-4 text-center animate-fadeIn">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-2 p-2 animate-slideIn">
                <div className="box">
                    <div className="box-header">dashboard/@bmi/page.tsx</div>
                    <div >
                        {bmi}
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">dashboard/@jsonEditor/page.tsx</div>
                    <div >
                        {jsonEditor}
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">dashboard/@chart/page.tsx</div>
                    <div >
                        {piechart}
                    </div>
                </div>
                <div className="box">
                    <div className="box-header">dashboard/@table/page.tsx</div>
                    <div >
                        {table}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantSummariesAndLayout;

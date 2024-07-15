'use client'

import React from "react";


function DashBoard({
    children,

}: {
    children: React.ReactNode,
}) {

    return (
        <div>
            <div>{children}</div>
        </div>
    );
}

export default DashBoard
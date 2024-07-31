'use client'

import React from "react";

// 定義組件屬性類型
type DashBoardProps = {
    children: React.ReactNode;
};

const DashBoard: React.FC<DashBoardProps> = ({ children }) => {
    return (
        <div>
            {/* 渲染子組件 */}
            <div>{children}</div>
        </div>
    );
};

export default DashBoard;

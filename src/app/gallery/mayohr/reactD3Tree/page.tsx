'use client'
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import { motion } from 'framer-motion';

const containerStyles = {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  overflow: 'hidden',
};

const orgChart = {
  name: 'CEO',
  attributes: { department: 'Executive' },
  children: [
    {
      name: 'CTO',
      attributes: { department: 'Technology' },
      children: [
        {
          name: 'Team Lead',
          attributes: { department: 'Frontend' },
          children: [
            { name: 'Developer', attributes: { level: 'Senior' } },
            { name: 'Developer', attributes: { level: 'Junior' } },
          ],
        },
        {
          name: 'Team Lead',
          attributes: { department: 'Backend' },
          children: [
            { name: 'Developer', attributes: { level: 'Senior' } },
            { name: 'Developer', attributes: { level: 'Junior' } },
          ],
        },
      ],
    },
    {
      name: 'CFO',
      attributes: { department: 'Finance' },
      children: [
        { name: 'Accountant', attributes: { level: 'Senior' } },
        { name: 'Accountant', attributes: { level: 'Junior' } },
      ],
    },
    {
      name: 'CMO',
      attributes: { department: 'Marketing' },
      children: [
        { name: 'Marketing Specialist', attributes: { focus: 'Digital' } },
        { name: 'Marketing Specialist', attributes: { focus: 'Brand' } },
      ],
    },
  ],
};

const renderCustomNode = ({ nodeDatum, toggleNode }: any) => (
  <motion.g
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.circle
      r="30"
      fill="url(#gradient)"
      stroke="#ffffff"
      strokeWidth="2"
      whileHover={{ scale: 1.1 }}
      onClick={toggleNode}
    />
    <motion.text
      fill="white"
      strokeWidth="1"
      x="40"
      y="-10"
      textAnchor="start"
      alignmentBaseline="middle"
      style={{ fontSize: '14px', fontWeight: 'bold' }}
    >
      {nodeDatum.name}
    </motion.text>
    {nodeDatum.attributes?.department && (
      <motion.text
        fill="white"
        strokeWidth="1"
        x="40"
        y="10"
        textAnchor="start"
        alignmentBaseline="middle"
        style={{ fontSize: '12px' }}
      >
        {nodeDatum.attributes.department}
      </motion.text>
    )}
    {nodeDatum.attributes?.level && (
      <motion.text
        fill="white"
        strokeWidth="1"
        x="40"
        y="30"
        textAnchor="start"
        alignmentBaseline="middle"
        style={{ fontSize: '12px' }}
      >
        {nodeDatum.attributes.level}
      </motion.text>
    )}
    {nodeDatum.attributes?.focus && (
      <motion.text
        fill="white"
        strokeWidth="1"
        x="40"
        y="30"
        textAnchor="start"
        alignmentBaseline="middle"
        style={{ fontSize: '12px' }}
      >
        {nodeDatum.attributes.focus}
      </motion.text>
    )}
  </motion.g>
);

export default function OrgChartTree() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const dimensions = document.getElementById('treeWrapper')?.getBoundingClientRect();
      if (dimensions) {
        setTranslate({
          x: dimensions.width / 2,
          y: dimensions.height / 6,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleNodeClick = (nodeDatum: any) => {
    alert(`Clicked node: ${nodeDatum.name}`);
  };

  return (
    <div id="treeWrapper" style={containerStyles}>
      <svg style={{ width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
      <Tree
        data={orgChart}
        orientation="vertical"
        translate={translate}
        renderCustomNodeElement={renderCustomNode}
        pathFunc="step"
        onNodeClick={handleNodeClick}
        collapsible={true}
        zoomable={true}
        draggable={true}
        scaleExtent={{ min: 0.1, max: 3 }}
        nodeSize={{ x: 200, y: 150 }}
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        transitionDuration={800}
      />
    </div>
  );
}
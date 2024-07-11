'use client'
import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

const containerStyles = {
  width: '100vw',
  height: '100vh',
};

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const dimensions = document.getElementById('treeWrapper')!.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 4,
    });
  }, []);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={containerStyles}>
      <Tree
        data={orgChart}
        orientation="vertical"
        translate={translate}
      />
    </div>
  );
}

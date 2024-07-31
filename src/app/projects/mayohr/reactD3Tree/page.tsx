'use client'
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Tree, { Point } from 'react-d3-tree';
import { mockOrgData } from '.';


type OrgUnitData = {
  isRoot: boolean; // 是否為根單位
  code: string; // 單位代碼
  displayCode: string; // 顯示用代碼
  name: string; // 單位名稱
  parentUnit?: OrgUnitData | null; // 父單位，可有可無
  childUnits?: OrgUnitData[]; // 子單位列表，可有可無
  state: string | null; // 單位狀態
  employees?: Employee[]; // 員工列表，可有可無
  upperCode: string | null; // 上級單位代碼
  managersCode?: string[]; // 經理代碼列表，可有可無
};

type Employee = {
  code: string; // 員工代碼
  displayCode: string; // 顯示用代碼
  name: string; // 員工姓名
  state?: string | null; // 員工狀態，可有可無
  roleCodes: string[]; // 角色代碼列表
};

type TreeNode = {
  id: string; // 節點ID
  name: string; // 節點名稱
  attributes?: { [key: string]: string }; // 節點屬性
  children?: TreeNode[]; // 子節點列表
  nodeSvgShape?: {
    shape: string; // 節點形狀
    shapeProps: { [key: string]: any }; // 節點形狀屬性
  };
};

// 將組織單位數據轉換為樹節點
const transformToTreeNode = (data: OrgUnitData, parentId: string = '', parentManagersName: string = ''): TreeNode => {
  // 設定節點ID，如果有父ID則附加上父ID
  const nodeId = parentId ? `${parentId}-${data.code}` : data.code;
  
  // 獲取經理名稱列表
  const managerNames = data.managersCode?.map(code => 
    data.employees?.find(emp => emp.code === code)?.name
  ).filter(Boolean).join(', ') || '';

  // 轉換員工節點
  const employeeNodes = data.employees?.map(employee => {
    const isOwnManager = data.managersCode?.includes(employee.code) || false;
    
    return {
      id: `${nodeId}-${employee.code}`, // 設定員工節點ID
      name: employee.name, // 員工名稱
      attributes: { 
        code: employee.code, // 員工代碼
        state: employee.state || '', // 員工狀態
        roleCodes: employee.roleCodes.join(', '), // 角色代碼
        manager: isOwnManager ? '' : managerNames // 經理名稱，如果自己是經理則不顯示
      },
    };
  }) || [];

  // 轉換子單位節點
  const childUnitNodes = data.childUnits?.map(child => transformToTreeNode(child, nodeId, managerNames)) || [];

  return {
    id: nodeId, // 單位節點ID
    name: data.name, // 單位名稱
    attributes: { 
      code: data.code, // 單位代碼
      state: data.state || '', // 單位狀態
      manager: parentManagersName // 父級經理名稱
    },
    children: [...childUnitNodes, ...employeeNodes], // 子節點包括子單位和員工
  };
};

// 高亮節點
const highlightNode = (node: TreeNode, searchTerm: string): TreeNode => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // 檢查是否匹配搜索詞
  const isMatch =
    node.name.toLowerCase().includes(lowerCaseSearchTerm) ||
    (node.attributes &&
      (node.attributes.code.toLowerCase().includes(lowerCaseSearchTerm) ||
        (node.attributes.roleCodes && node.attributes.roleCodes
          .split(',')
          .map(role => role.trim().toLowerCase())
          .some(role => role.includes(lowerCaseSearchTerm))) ||
        (node.attributes.manager && node.attributes.manager
          .toLowerCase().includes(lowerCaseSearchTerm))));

  // highlight 查到的
  const highlightedChildren = node.children?.map(child => highlightNode(child, searchTerm)) || [];

  return {
    ...node,
    nodeSvgShape: {
      shape: 'circle',
      shapeProps: {
        r: 10,
        fill: isMatch ? 'url(#blue-gradient)' : 'url(#gray-gradient)',
      },
    },
    children: highlightedChildren,
  };
};

const containerStyles = {
  width: '100vw',
  height: '700px',
};

// 自定義hook，用於居中樹
const useCenteredTree = (containerRef: React.RefObject<HTMLDivElement>, zoom: number) => {
  const [translate, setTranslate] = useState<Point>({ x: 950, y: 200 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 }); // 設定樹的中心點
    }
  }, [containerRef, zoom]);

  return translate;
};

// 主組件
const Organizational = () => {
  const [orgData, setOrgData] = useState<TreeNode | null>(null);
  const [highlightedData, setHighlightedData] = useState<TreeNode | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedNodeIds, setExpandedNodeIds] = useState<string[]>([]);
  const [detailedVisibility, setDetailedVisibility] = useState<{ [key: string]: boolean }>({});
  const [zoom, setZoom] = useState<number>(0.3);

  const containerRef = useRef<HTMLDivElement>(null);
  const translate = useCenteredTree(containerRef, zoom);
  const nodeRefs = useRef<{ [key: string]: SVGCircleElement | null }>({});

  // 使用模擬數據
  useEffect(() => {
    const orgUnitNodes = mockOrgData.map(m => transformToTreeNode(m.rootUnit));
    const combinedTree: TreeNode = {
      id: 'root',
      name: 'Combined Organization',
      children: orgUnitNodes,
    };
    setOrgData(combinedTree);
    setHighlightedData(combinedTree);
    setExpandedNodeIds(getAllNodeIds(combinedTree)); // 初始展開所有節點
  }, []);

  // 根據搜索更新高亮數據
  useEffect(() => {
    if (searchTerm && orgData) {
      const highlightedTree = highlightNode(orgData, searchTerm);
      setHighlightedData(highlightedTree);

      const matchedNodes = findMatchingNodes(highlightedTree, searchTerm);
      if (matchedNodes.length === 1) {
        const nodeId = matchedNodes[0].id;
        nodeRefs.current[nodeId]?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
      const visibility = matchedNodes.reduce((acc, node) => {
        acc[node.id] = true;
        return acc;
      }, {} as { [key: string]: boolean });
      setDetailedVisibility(visibility);
    } else {
      setHighlightedData(orgData);
      setZoom(0.7);
      setDetailedVisibility({});
    }
  }, [searchTerm, orgData]);

  // 查找匹配的節點
  const findMatchingNodes = (node: TreeNode, searchTerm: string): TreeNode[] => {
    const matches: TreeNode[] = [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const isMatch =
      node.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      (node.attributes &&
        (node.attributes.code.toLowerCase().includes(lowerCaseSearchTerm) ||
          (node.attributes.roleCodes && node.attributes.roleCodes
            .split(',')
            .map(role => role.trim().toLowerCase())
            .some(role => role.includes(lowerCaseSearchTerm))) ||
          (node.attributes.manager && node.attributes.manager
            .toLowerCase().includes(lowerCaseSearchTerm))));

    if (isMatch) {
      matches.push(node);
    }

    if (node.children) {
      node.children.forEach(child => {
        matches.push(...findMatchingNodes(child, searchTerm));
      });
    }

    return matches;
  };

  // 切換詳細可見性
  const toggleDetailedVisibility = (nodeId: string, isMatched: boolean = false) => {
    setDetailedVisibility(prev => ({
      ...prev,
      [nodeId]: isMatched || !prev[nodeId],
    }));
  };

  const setNodeRef = useCallback((nodeId: string) => (el: SVGCircleElement | null) => {
    nodeRefs.current[nodeId] = el;
  }, []);

  const renderCustomNodeElement = ({ nodeDatum, toggleNode }: any) => {
    if (nodeDatum.id === "root") return <g></g>
    const isExpanded = expandedNodeIds.includes(nodeDatum.id);
    const isDetailedVisible = detailedVisibility[nodeDatum.id];
  
    return (
      <g className="node">
        <defs>
        <linearGradient id="blue-gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#ff7e5f" />
          <stop offset="50%" stopColor="#feb47b" />
          <stop offset="100%" stopColor="#ff7e5f" />
        </linearGradient>
        <linearGradient id="gray-gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#43cea2" />
          <stop offset="50%" stopColor="#185a9d" />
          <stop offset="100%" stopColor="#43cea2" />
        </linearGradient>
        </defs>
        <circle
          className="node-circle"
          r={35}
          fill={nodeDatum.nodeSvgShape?.shapeProps?.fill || 'url(#gray-gradient)'}
          onClick={(e) => {
            e.stopPropagation();
            toggleDetailedVisibility(nodeDatum.id, searchTerm ? true : false);
            toggleNode();
          }}
          ref={setNodeRef(nodeDatum.id)}
        />
        <text className="node-text" x="40" y="-10">
          {nodeDatum.name}
        </text>
        {isExpanded && isDetailedVisible && (
          <g transform="translate(25, 25)">
            {nodeDatum.attributes?.code && (
              <text className="node-detail" x="10" y="20">
                Code: {nodeDatum.attributes.code}
              </text>
            )}
            {nodeDatum.attributes?.state && (
              <text className="node-detail" x="10" y="35">
                State: {nodeDatum.attributes.state}
              </text>
            )}
            {nodeDatum.attributes?.roleCodes && (
              <text className="node-detail" x="10" y="50">
                Roles: {nodeDatum.attributes.roleCodes}
              </text>
            )}
            {nodeDatum.attributes?.manager && nodeDatum.attributes.manager !== '' && (
              <text 
                className="node-detail" 
                x="10" 
                y={nodeDatum.attributes?.roleCodes && nodeDatum.attributes?.state ? "65" : "35"}
              >
                Managers: {nodeDatum.attributes.manager}
              </text>
            )}
          </g>
        )}
      </g>
    );
  };

  const renderTreeNode = (node: TreeNode): TreeNode => {
    const isExpanded = expandedNodeIds.includes(node.id);
    if (!isExpanded) {
      return { ...node, children: [] };
    }
    return { ...node, children: node.children?.map(renderTreeNode) };
  };

  const getAllNodeIds = (node: TreeNode): string[] => {
    let ids = [node.id];
    if (node.children) {
      node.children.forEach(child => {
        ids = [...ids, ...getAllNodeIds(child)];
      });
    }
    return ids;
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search for a person"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {highlightedData && (
        <div id="treeWrapper" style={containerStyles} ref={containerRef}>
          <Tree
            data={renderTreeNode(highlightedData)}
            translate={translate}
            dimensions={{ width: containerRef.current?.clientWidth || 0, height: containerRef.current?.clientHeight || 0 }}
            renderCustomNodeElement={renderCustomNodeElement}
            collapsible={false}
            orientation="vertical"
            pathFunc="step"
            pathClassFunc={(linkData) => 
            // 在這裡隱藏 root 的顏色
              linkData.source.data.name === "Combined Organization" ? 'no-path' : 'custom-path'
            }
            nodeSize={{ x: 300, y: 200 }}
            zoom={zoom}
          />
        </div>
      )}
    </div>
  );
};

export default Organizational;

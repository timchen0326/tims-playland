"use client"
import React, { useState, useEffect } from 'react';
import { JsonEditor } from 'json-edit-react';
import { JsonEditorProps } from 'json-edit-react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import axios from 'axios';
import styles from './JSONEditor.module.css';
import { Shoutout } from '@/util/shoutout/page';

// 定義 JSON 數據的類型
type JsonData = {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hobbies: string[];
};

export default function Page() {
  const [jsonData, setJsonData] = useState<JsonData | null>(null);
  const [showArrayIndices, setShowArrayIndices] = useState(true);
  const [indent, setIndent] = useState(2);
  const [searchText, setSearchText] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<'key' | 'value' | 'all'>('all');

  // 初次渲染時獲取 JSON 數據
  useEffect(() => {
    fetchJsonData();
  }, []);

  // 獲取 JSON 數據的函數
  const fetchJsonData = async () => {
    try {
      const response = await axios.get('https://jsoneditor-q2c2.onrender.com/api/data');
      setJsonData(response.data);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  // 更新 JSON 數據的處理函數
  const handleUpdate: JsonEditorProps['onUpdate'] = async ({ newData }) => {
    try {
      await axios.post('https://jsoneditor-q2c2.onrender.com/api/save', newData);
      setJsonData(newData as JsonData);
    } catch (error) {
      console.error('Error saving JSON data:', error);
    }
  };

  // 重置 JSON 數據
  const handleReset = () => {
    fetchJsonData();
  };

  // 切換是否顯示數組索引
  const toggleArrayIndices = () => {
    setShowArrayIndices(prevState => !prevState);
  };

  // 增加縮進
  const increaseIndent = () => {
    setIndent(prevIndent => prevIndent + 1);
  };

  // 減少縮進
  const decreaseIndent = () => {
    setIndent(prevIndent => (prevIndent > 1 ? prevIndent - 1 : 1));
  };

  // 如果數據未加載完成，顯示加載中
  if (!jsonData) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      {/* 引入和使用 Shoutout 組件 */}
      <Shoutout component='json-edit-react' importMethod={`import {JsonEditor} from 'json-edit-react'; `}  use={'<JsonEditor/>'}/>
      <div className={styles.editorContainer}>
        <div className={styles.editorActions}>
          <button onClick={handleReset} className={styles.editorButton}>Reset Data</button>
          <button onClick={toggleArrayIndices} className={styles.editorButton}>
            {showArrayIndices ? 'Hide Array Indices' : 'Show Array Indices'}
          </button>
          <button onClick={increaseIndent} className={styles.editorButton}>Increase Indent</button>
          <button onClick={decreaseIndent} className={styles.editorButton}>Decrease Indent</button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search JSON..."
            className={styles.searchInput}
          />
          <select
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value as 'key' | 'value' | 'all')}
            className={styles.searchSelect}
          >
            <option value="all">Search All</option>
            <option value="key">Search Keys</option>
            <option value="value">Search Values</option>
          </select>
        </div>
        {/* 僅在瀏覽器環境中渲染 JsonEditor */}
        {typeof window !== 'undefined' && (
          <JsonEditor
            data={jsonData}
            onUpdate={handleUpdate}
            showArrayIndices={showArrayIndices}
            indent={indent}
            searchText={searchText}
            searchFilter={searchFilter}
            restrictDelete={true}
          />
        )}
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.infoHeader}>User Information</h2>
        <div className={styles.infoSection}>
          <FaUser className={styles.infoIcon} />
          <strong>Name:</strong> {jsonData.name}
        </div>
        <div className={styles.infoSection}>
          <FaEnvelope className={styles.infoIcon} />
          <strong>Age:</strong> {jsonData.age}
        </div>
        <div className={styles.infoSection}>
          <FaEnvelope className={styles.infoIcon} />
          <strong>Email:</strong> {jsonData.email}
        </div>
        <h3 className={styles.infoHeader}>Address</h3>
        <div className={styles.infoSection}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <strong>Street:</strong> {jsonData.address.street}
        </div>
        <div className={styles.infoSection}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <strong>City:</strong> {jsonData.address.city}
        </div>
        <div className={styles.infoSection}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <strong>State:</strong> {jsonData.address.state}
        </div>
        <div className={styles.infoSection}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <strong>Zip:</strong> {jsonData.address.zip}
        </div>
        <h3 className={styles.infoHeader}>Hobbies</h3>
        <ul className={styles.infoList}>
          {jsonData.hobbies.map((hobby, index) => (
            <li key={index} className={styles.infoListItem}>
              <FaStar className={styles.infoIcon} /> {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client"
import React, { useState } from 'react';
import { JsonEditor } from 'json-edit-react';
import { JsonEditorProps } from 'json-edit-react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import styles from './JSONEditor.module.css';

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
  const initialData: JsonData = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    hobbies: ["reading", "gaming", "hiking"]
  };

  const [jsonData, setJsonData] = useState<JsonData>(initialData);
  const [showArrayIndices, setShowArrayIndices] = useState(true);
  const [indent, setIndent] = useState(2);
  const [searchText, setSearchText] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<'key' | 'value' | 'all'>('all');

  const handleUpdate: JsonEditorProps['onUpdate'] = ({ newData }) => {
    setJsonData(newData as JsonData);
  };

  const handleReset = () => {
    setJsonData(initialData);
  };

  const toggleArrayIndices = () => {
    setShowArrayIndices(prevState => !prevState);
  };

  const increaseIndent = () => {
    setIndent(prevIndent => prevIndent + 1);
  };

  const decreaseIndent = () => {
    setIndent(prevIndent => (prevIndent > 1 ? prevIndent - 1 : 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.editorContainer}>
        <div className={styles.editorTitle}>
          <code>import {'{JsonEditor}'} from &apos;json-edit-react&apos;;</code>
          <br />
          <code>{'<' + 'JsonEditor />'}</code>
        </div>
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
        {/* Conditionally render JsonEditor only in the browser */}
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

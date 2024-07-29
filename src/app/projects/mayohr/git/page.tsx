'use client'
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function GitTutorial() {
  const [expandedSection, setExpandedSection] = useState('');

  const gitCommands = [
    { command: 'git init', description: '初始化一個新的Git倉庫' },
    { command: 'git clone [url]', description: '從遠程源克隆一個倉庫' },
    { command: 'git add [file]', description: '將文件添加到暫存區' },
    { command: 'git commit -m "[message]"', description: '提交更改並附加信息' },
    { command: 'git push', description: '將更改推送到遠程倉庫' },
    { command: 'git pull', description: '從遠程倉庫拉取更改' },
    { command: 'git branch', description: '列出、創建或刪除分支' },
    { command: 'git merge [branch]', description: '將分支合併到活動分支中' },
  ];

  const toggleSection = (command: any) => {
    setExpandedSection(expandedSection === command ? '' : command);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Git:入門指南</h1>
      
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', background: '#f9f9f9' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#555' }}>什麼是 Git?</h2>
        <p>
          <Typewriter
            words={['Git 是一個強大的分佈式版本控制系統，幫助你跟踪代碼中的更改，無縫協作，並輕鬆管理項目的不同版本。']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>基本的 Git 命令</h2>
      <div>
        {gitCommands.map((item, index) => (
          <div key={index} style={{ marginBottom: '0.5rem', border: '1px solid #eee', borderRadius: '4px', background: '#fff' }}>
            <button 
              onClick={() => toggleSection(item.command)}
              style={{ 
                width: '100%', 
                textAlign: 'left', 
                padding: '0.75rem 1rem', 
                background: '#f5f5f5', 
                border: 'none', 
                cursor: 'pointer',
                fontWeight: '600',
                color: '#333',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px'
              }}
            >
              {item.command}
            </button>
            {expandedSection === item.command && (
              <div style={{ padding: '1rem', borderTop: '1px solid #eee', background: '#fff' }}>
                <Typewriter
                  words={[item.description]}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Commit {
  id: string;
  message: string;
  parent: string | null;
}

interface Branch {
  name: string;
  commitId: string;
}

const GitBasics: React.FC = () => {
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [branches, setBranches] = useState<Branch[]>([{ name: 'main', commitId: '' }]);
  const [currentBranch, setCurrentBranch] = useState<string>('main');
  const [workingDirectory, setWorkingDirectory] = useState<string[]>([]);
  const [stagingArea, setStagingArea] = useState<string[]>([]);

  const generateCommitId = () => Math.random().toString(36).substring(2, 8);

  const handleCommand = () => {
    const args = command.split(' ');
    const cmd = args[0];

    switch (cmd) {
      case 'git':
        handleGitCommand(args.slice(1));
        break;
      default:
        setOutput([...output, `$ ${command}`, 'Command not recognized']);
    }

    setCommand('');
  };

  const handleGitCommand = (args: string[]) => {
    const subCommand = args[0];

    switch (subCommand) {
      case 'init':
        setCommits([]);
        setBranches([{ name: 'main', commitId: '' }]);
        setCurrentBranch('main');
        setOutput([...output, `$ git ${args.join(' ')}`, 'Initialized empty Git repository']);
        break;
      case 'add':
        if (args[1] === '.') {
          setStagingArea([...stagingArea, ...workingDirectory]);
          setWorkingDirectory([]);
        } else {
          const file = args[1];
          if (workingDirectory.includes(file)) {
            setStagingArea([...stagingArea, file]);
            setWorkingDirectory(workingDirectory.filter(f => f !== file));
          }
        }
        setOutput([...output, `$ git ${args.join(' ')}`, 'Changes added to staging area']);
        break;
      case 'commit':
        if (stagingArea.length === 0) {
          setOutput([...output, `$ git ${args.join(' ')}`, 'Nothing to commit']);
          return;
        }
        const message = args.slice(2).join(' ');
        const newCommit: Commit = {
          id: generateCommitId(),
          message,
          parent: branches.find(b => b.name === currentBranch)?.commitId || null
        };
        setCommits([...commits, newCommit]);
        setBranches(branches.map(b => 
          b.name === currentBranch ? { ...b, commitId: newCommit.id } : b
        ));
        setStagingArea([]);
        setOutput([...output, `$ git ${args.join(' ')}`, `[${currentBranch} ${newCommit.id}] ${message}`]);
        break;
      case 'branch':
        if (args.length === 1) {
          setOutput([...output, `$ git ${args.join(' ')}`, branches.map(b => `${b.name === currentBranch ? '* ' : '  '}${b.name}`).join('\n')]);
        } else {
          const newBranch = args[1];
          if (branches.some(b => b.name === newBranch)) {
            setOutput([...output, `$ git ${args.join(' ')}`, `Branch '${newBranch}' already exists`]);
          } else {
            const currentCommitId = branches.find(b => b.name === currentBranch)?.commitId || '';
            setBranches([...branches, { name: newBranch, commitId: currentCommitId }]);
            setOutput([...output, `$ git ${args.join(' ')}`, `Created branch '${newBranch}'`]);
          }
        }
        break;
      case 'checkout':
        const branchName = args[1];
        if (args[0] === '-b') {
          // Create and switch to new branch
          const newBranch = args[2];
          if (branches.some(b => b.name === newBranch)) {
            setOutput([...output, `$ git ${args.join(' ')}`, `Branch '${newBranch}' already exists`]);
          } else {
            const currentCommitId = branches.find(b => b.name === currentBranch)?.commitId || '';
            setBranches([...branches, { name: newBranch, commitId: currentCommitId }]);
            setCurrentBranch(newBranch);
            setOutput([...output, `$ git ${args.join(' ')}`, `Switched to a new branch '${newBranch}'`]);
          }
        } else {
          // Switch to existing branch
          const branch = branches.find(b => b.name === branchName);
          if (branch) {
            setCurrentBranch(branchName);
            setOutput([...output, `$ git ${args.join(' ')}`, `Switched to branch '${branchName}'`]);
          } else {
            setOutput([...output, `$ git ${args.join(' ')}`, `Branch '${branchName}' does not exist`]);
          }
        }
        break;
      default:
        setOutput([...output, `$ git ${args.join(' ')}`, 'Git command not recognized']);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const renderGitTree = () => {
    // This is a simplified representation. A more complex visualization would be needed for a full tree.
    return (
      <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
        {commits.map((commit, index) => (
          <div key={commit.id}>
            {`${index === commits.length - 1 ? '* ' : '| '}${commit.id.substring(0, 7)} ${commit.message}`}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Git 基礎教程</title>
        <meta name="description" content="學習基本的 Git 命令 開始使用版本控制 " />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Git 基礎教程</h1>

        <section>
          <p>嘗試 Git 命令 在下面的輸入框中輸入 Git 命令 並按下&quot;Enter&quot;鍵來查看模擬結果 </p>
          <div style={{ border: '1px solid #ccc', padding: '1rem', backgroundColor: '#f7f7f7' }}>
            <div style={{ height: '200px', overflowY: 'auto', marginBottom: '1rem' }}>
              {output.map((line, index) => (
                <pre key={index} style={{ margin: 0 }}>
                  <code>{line}</code>
                </pre>
              ))}
            </div>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="輸入 Git 命令"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default GitBasics;

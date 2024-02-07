import React from 'react';
import './App.css';
import useStorage from './useStorage.jsx';

function App() {
  const [content, setContent] = useStorage('content','')
  return (
    <div>
      <input id="input" type="text" value={content} onChange={e=>setContent(e.target.value)}></input>
    </div>
  );
}

export default App;
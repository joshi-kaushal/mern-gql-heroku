import React from 'react';
import { AddQuote } from './components/AddQuote';
import { Quotes } from './components/Quotes';

function App() {
  return (
    <div className="App">
     <h1>React App</h1>
      <AddQuote />
      <Quotes />
    </div>
  );
}

export default App;

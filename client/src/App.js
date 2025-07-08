import React from 'react';
import ButtonWithBoundary from './components/Button';

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Welcome to the MERN Testing App</h1>
      <ButtonWithBoundary onClick={() => alert('Button clicked!')}>
        Click me
      </ButtonWithBoundary>
    </div>
  );
}

export default App;

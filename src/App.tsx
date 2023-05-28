import React from 'react';
import './styles/_app.scss';
import NavigationBar from './components/Header/NavigationBar';

function App() {
  return (
    <div className="App">
      <div className="App_Container">
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;

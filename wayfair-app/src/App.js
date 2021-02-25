import React from 'react';
import routes from './config/routes';
import Footer from './components/Footer';

import './App.css';


function App() {

  return (
    <div className="App">  
      { routes }
        <Footer />
      </div>
  );
}

export default App;







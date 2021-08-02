import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </React.Fragment>
  );
}

export default App;

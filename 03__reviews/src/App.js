import React from 'react';
import Review from './Review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>reviews</h2>
          <span className='underline'></span>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;

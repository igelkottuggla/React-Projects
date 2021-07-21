import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {data.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                {...question}
                r
              ></SingleQuestion>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default App;

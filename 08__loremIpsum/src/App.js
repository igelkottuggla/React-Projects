import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //Fisher–Yates shuffle ( Knuth shuffle)
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    const shuffledArray = shuffle(data);
    setText(shuffledArray.slice(0, amount));

    //original version from the course
    // if (count > 8) {
    //   amount = 8;
    // }
    // setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring Lorem Impsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          return (
            <p key={index} className='lorem-text'>
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;

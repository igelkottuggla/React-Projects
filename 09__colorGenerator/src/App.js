import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState([]);
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#87CEFA').all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setIsError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            placeholder='#4B0082'
            className={`${isError ? 'error' : null}`}
          />

          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{readMore ? info : `${info.substring(0, 0)}`}</p>
    </article>
  );
};

export default Question;

import React from 'react';

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('Do you want to add this book to your cart?');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='Book cover' />
      <h1>{title}</h1>
      <h4>{author}</h4>

      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;

import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//JS
import { books } from './books';
import Book from './book';

//Component
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

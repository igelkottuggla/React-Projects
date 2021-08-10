import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') setTheme('dark-theme');
    else setTheme('light-theme');
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <div className='nav-center'>
        <h1>Overracted</h1>
        <button className='btn' onClick={toggleTheme}>
          toggle theme
        </button>
      </div>
      <section className='articles'>
        {data.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
}

export default App;

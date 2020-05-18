import React, {Component} from 'react';
import {render} from 'react-dom';

const Book = ({title, author, pages}) => {
  return (
    <section>
    <h2>{title}</h2>
    <p>By: {author}</p>
    <p>Pages: {pages} pages</p>
  </section>
  )
}

const Library = () => {
  return (
    <div>
      <Book title="Dark Web" author="Riaan N" pages={472} />
      <Book title="Life of Pi" author="Arin N" pages={235} />
      <Book title="Gentleman" author="Sharon N" pages={1091} />
    </div>
  )
}
render(
  <Library />,
  document.getElementById('root')
)
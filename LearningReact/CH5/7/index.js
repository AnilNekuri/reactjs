import React, {Component} from 'react';
import {render} from 'react-dom';
import { Library } from "./Library";

const booksList = [
  {title: "The Mask"},
  {title: "Dark Web", author: "Riaan N", pages: 472},
  {title: "Life of Pi", author: "Arin N", pages: 235},
  {title: "Gentleman", author: "Sharon N", pages: 1091},
  {title: "Arjun Reddy", author: "Anil N", pages: 10091}
]

render(
  <Library books={booksList}/>,
  document.getElementById('root')
)
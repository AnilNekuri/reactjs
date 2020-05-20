import React from 'react';
import PropTypes from "prop-types";

export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
      <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmarks today : {freeBookmark ? 'Yes!' : 'No!'}</p>
    </section>
    )
  }

  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
  }
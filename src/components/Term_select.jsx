import React from 'react';

const choices = ['Fall', 'Winter', 'Spring'];

const Term_select = ({ selectedTerm, onTermChange }) => {
  const nextChoice = () => {
    const currentIndex = choices.indexOf(selectedTerm);
    const nextIndex = (currentIndex + 1) % choices.length;
    const nextTerm = choices[nextIndex];
    onTermChange(nextTerm);
  }

  return (
    <button onClick={nextChoice}>{selectedTerm}</button>
  );
};

export default Term_select;

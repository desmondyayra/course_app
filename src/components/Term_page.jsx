import React, { useState } from 'react';
import CourseList from './CourseList';
import Term_select from './Term_select';

const Term_page = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const handleTermChange = (term) => {
    setSelectedTerm(term);
  }

  return (
    <div>
      <h1>Course Selection</h1>
      <Term_select selectedTerm={selectedTerm} onTermChange={handleTermChange} />
      <CourseList courses={courses} term={selectedTerm} />
    </div>
  );
};

export default Term_page;

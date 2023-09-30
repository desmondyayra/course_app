import React from 'react';

const CourseLine = ({ course }) => (
  <p>
    {course.term} CS {course.number} : {course.title}
  </p>
);

export default CourseLine;

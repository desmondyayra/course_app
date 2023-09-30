import React from 'react';
import CourseLine from './course';

const CourseList = ({ courses }) => (
  <div>
    {Object.entries(courses).map(([id, course]) => (
      <CourseLine key={id} course={course} />
    ))}

  </div>
);

export default CourseList;

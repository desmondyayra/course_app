import React from 'react';
import CourseLine from './course';
import '../App.css';

const CourseList = ({ courses }) => (
  <div className="container">
    <div className="card-grid">
      {Object.entries(courses).map(([id, course]) => (
        <CourseLine key={id} course={course} />
      ))}
    </div>
  </div>
);

export default CourseList;

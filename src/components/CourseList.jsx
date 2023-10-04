import React from 'react';
import CourseLine from './course';
import '../App.css';

const CourseList = ({ courses, term }) => {

  
  
  const filteredCourses = Object.values(courses).filter(
    (course) => course.term == term
  );

  
  console.log(term);
  
  return (
    <div className="container">
      <div className="card-grid">
        {Object.entries(filteredCourses).map(([id, course]) => (
          <CourseLine key={id} course={course} />
        ))}
      </div>
    </div>);
};

export default CourseList;

import React from 'react';

const CourseLine = ({ course }) => (
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">{course.term} CS {course.number}</h5>
      </div>
      <div className="card-body">
        <p className="card-title">{course.title}</p>
      </div>
      <div className="card-footer">
        {course.meets}
      </div>
    </div>
  </div>
);

export default CourseLine;

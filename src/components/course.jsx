import React from 'react';

const CourseLine = ({ course, isSelected, pink, toggleSelect }) => {
  let cardClass = 'card';
  // console.log(course);
  if (isSelected) {
    cardClass = 'card selected';
  } else if (pink) {
    cardClass = 'card pink';
    console.log(course)
  }

  return (
    <div className="col-md-3 mb-3">
      <div className={cardClass} onClick={toggleSelect}>
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
};

export default CourseLine;

import React, { useState } from 'react';
import CourseEditForm from './CourseEditForm'; // Import the CourseEditForm component

const CourseLine = ({ course, isSelected, pink, toggleSelect, onEditClick }) => {
  const [isEditing, setIsEditing] = useState(false);

  let cardClass = 'card';

  if (isSelected) {
    cardClass = 'card selected';
  } else if (pink) {
    cardClass = 'card pink';
  }

  const handleEditClick = () => {
    setIsEditing(true);
    
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    
  };

  return (
    <div className="col-md-3 mb-3">
      <div className={cardClass} onClick={toggleSelect}>
        <div className="card-header">
          <h5 className="mb-0">{course.term} CS {course.number}</h5>
        </div>
        <div className="card-body">
          {isEditing ? (
            <CourseEditForm
              course={course}
              onCancel={handleCancelClick}
              onSave={(editedCourse) => {
                // Handle saving the edited course data
                console.log('Saving edited course:', editedCourse);
                setIsEditing(false);
                
              }}
            />
          ) : (
            <p className="card-title">{course.title}</p>
          )}
        </div>
        <div className="card-footer">
          {course.meets}
        </div>
        {isEditing ? null : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default CourseLine;

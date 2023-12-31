import React, { useState } from 'react';
import CourseEditForm from './CourseEditForm'; // Import the CourseEditForm component

const CourseLine = ({ course, profile, isSelected, pink, toggleSelect, onEditClick }) => {
  // console.log(course);
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
    <div className="col-md-3 mb-3" data-cy="course">
      
      <div className={cardClass} onClick={toggleSelect}>
        <div className="card-header">
          <h5 className="mb-0">{course.term} CS {course.number}</h5>
        </div>
        <div className="card-body">
          {isEditing ? (
            <CourseEditForm
              course={course}
              profile={profile}
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
        {profile === 'Admin' && !isEditing ? ( 
          <button onClick={handleEditClick}>Edit</button>
        ) : null}
      </div>
    </div>
  );
};

export default CourseLine;

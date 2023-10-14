import React from 'react';

const CoursePlanPopup = ({ selectedCourses, courses, closeModal }) => {
  const filteredSelectedCourses = selectedCourses.map((index) => {
    const course = courses[index];
    return course;
  }).filter(Boolean);

  return (
    <div>
      {filteredSelectedCourses.length === 0 ? (
        <div>
          <p>No courses selected.</p>
          <p>Instructions on how to select courses go here.</p>
        </div>
      ) : (
        <div>
          <h2>Your Course Plan:</h2>
          <ul>
            {filteredSelectedCourses.map((course, index) => (
              <li key={index}>
                <h3>Course {course.number}</h3>
                <p>Title: {course.title}</p>
                <p>Meeting Times: {course.meetingTimes}</p>
                {/* Include other relevant course information */}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default CoursePlanPopup;

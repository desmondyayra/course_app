import React, { useState } from 'react';
import CourseLine from './course';
import '../App.css';

const CourseList = ({ courses, term }) => {
  // State to keep track of selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to toggle selection of an item
  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredCourses = Object.values(courses).filter(
    (course) => course.term === term
  );

  // console.log(term);

  return (
    <div className="container">
      <div className="card-grid">
        {Object.entries(filteredCourses).map(([id, course]) => (
          <CourseLine
            key={id}
            course={course}
            isSelected={selectedItems.includes(id)} 
            toggleSelect={() => toggleSelect(id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

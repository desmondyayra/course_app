import React, { useState } from 'react';
import CourseLine from './Course';
import Modal from './Modal'; // Import the Modal component
import '../App.css';
import CoursePlanPopup from './CoursePlanPopup';

const CourseList = ({ courses, term }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      <button className="course-plan-button" onClick={openModal}>
        Course Plan
      </button>

      <Modal open={isModalOpen} close={closeModal}>
        <CoursePlanPopup
          selectedCourses={selectedItems}
          courses={filteredCourses}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default CourseList;

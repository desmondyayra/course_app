import React, { useState } from 'react';
import CourseLine from './Course';
import Modal from './Modal'; // Import the Modal component
import '../App.css';
import CoursePlanPopup from './CoursePlanPopup';

const CourseList = ({ courses, term }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      
      if ( !hasTimeConflict(selectedItems, id)) {
        setSelectedItems([...selectedItems, id]);
      } else {
        // Handle the time conflict (e.g., show an error message)
        console.log(`Time conflict detected for Course `);
      }
    }
  };
  

  const filteredCourses = Object.values(courses).filter(
    (course) => course.term === term
  );


  const hasTimeConflict = (selectedCourses, newCourseIndex) => {
    // console.log(newCourseIndex);
    const newCourse = filteredCourses[newCourseIndex];
    // console.log(newCourse);
  
    for (const selectedCourseIndex of selectedCourses) {
      const selectedCourse = filteredCourses[selectedCourseIndex];
      // console.log(selectedCourse);
      // console.log(newCourse);
      if (selectedCourse && newCourse) {
        // Check if the newCourse's meeting times overlap with the selectedCourse
        if (doTimesOverlap(selectedCourse.meets, newCourse.meets)) {
          return true;
        }
      }
    }
    return false;
  };
  

  const doTimesOverlap = (time1, time2) => {
    const [days1, range1] = time1.split(' ');
    const [days2, range2] = time2.split(' ');
  
    
    if (days1 !== days2) {
      return false;
    }
  
    const [start1, end1] = range1.split('-').map((t) => parseTime(`2021-01-01T${t}:00`));
    const [start2, end2] = range2.split('-').map((t) => parseTime(`2021-01-01T${t}:00`));
  
    
    return start1 < end2 && start2 < end1;
  };
  
  const parseTime = (timeStr) => {
    const [date, time] = timeStr.split('T');
    const [hour, minute] = time.split(':').map(Number);
    return new Date(2021, 0, 1, hour, minute);
  };
  
    



 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const coursesWithPink = filteredCourses.map((course) => {
  //   console.log(course.id);
  //   const isPink = !selectedItems.includes(course.id) && !hasTimeConflict(selectedItems, course.id);
  //   return { ...course, pink: isPink };
  // });

  

  return (
    <div className="container">
      <div className="card-grid">
        {Object.entries(filteredCourses).map(([id, course]) => (
          <CourseLine
            key={id}
            course={course}
            isSelected={selectedItems.includes(id)}
            pink={!selectedItems.includes(id) && !hasTimeConflict(selectedItems, id)}
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

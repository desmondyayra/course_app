import React, { useState } from 'react';
import { useDbUpdate } from '../utilities/firebase';

const CourseEditForm = ({ course, onCancel, onSave }) => {
    // console.log(course);
  const [editedTitle, setEditedTitle] = useState(course.title);
  const [editedMeetingTimes, setEditedMeetingTimes] = useState(course.meets);
  const [titleError, setTitleError] = useState('');
  const [meetingTimesError, setMeetingTimesError] = useState('');

  const validateForm = () => {
    let isFormValid = true;
    setTitleError('');
    setMeetingTimesError('');

    if (editedTitle.length < 2) {
      setTitleError('Title must be at least two characters.');
      isFormValid = false;
    }

    if (editedMeetingTimes) {
      if (!isValidMeetingTimes(editedMeetingTimes)) {
        setMeetingTimesError('Invalid meeting time format. Use e.g., MWF 12:00-13:20.');
        isFormValid = false;
      }
    }

    return isFormValid;
    };
    
    

  const isValidMeetingTimes = (times) => {
    const regex = /^[A-Z]{1,5} \d{2}:\d{2}-\d{2}:\d{2}$/;
    return regex.test(times);
  };


    const [updateData, result] = useDbUpdate(`/courses/${course.id}`);
    console.log(course.id);
    const handleSaveClick = async () => {
        if (validateForm()) {
          const editedCourse = {
            ...course,
            title: editedTitle,
            meets: editedMeetingTimes,
            };
            

    
          try {
            await updateData(editedCourse); // Update the data in the database
            onSave(editedCourse); // Notify the parent component that the data has been saved
          } catch (error) {
            console.error('Error updating data:', error);
          }
        }
      };
   

  return (
    <form onSubmit={handleSaveClick}>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      {titleError && <div className="error-message">{titleError}</div>}
      <input
        type="text"
        value={editedMeetingTimes}
        onChange={(e) => setEditedMeetingTimes(e.target.value)}
      />
      {meetingTimesError && <div className="error-message">{meetingTimesError}</div>}
      <button type="submit">Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CourseEditForm;

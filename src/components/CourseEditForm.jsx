import React, { useState } from 'react';

const CourseEditForm = ({ course, onCancel, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(course.title);
  const [editedMeetingTimes, setEditedMeetingTimes] = useState(course.meets);

  const handleSaveClick = () => {
    
    const editedCourse = {
      ...course,
      title: editedTitle,
      meets: editedMeetingTimes,
    };
    onSave(editedCourse);
  };

  return (
    <form>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        type="text"
        value={editedMeetingTimes}
        onChange={(e) => setEditedMeetingTimes(e.target.value)}
      />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CourseEditForm;

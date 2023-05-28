import React, { useState } from "react";
import "./edit.css";

const Edit = (props) => {
  const [person, setPerson] = useState(props.editTodo);

  const handleEditInputName = (e) => {
    let newObj = { ...person };
    newObj.name = e.target.value;
    setPerson(newObj);
  };

  const handleEditInputSurname = (e) => {
    let newObj = { ...person };
    newObj.surname = e.target.value;
    setPerson(newObj);
  };

  const handleEditInputPhone = (e) => {
    let newObj = { ...person };
    newObj.phone = e.target.value;
    setPerson(newObj);
  };

  const handleEditInputEmail = (e) => {
    let newObj = { ...person };
    newObj.email = e.target.value;
    setPerson(newObj);
  };

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          className="edited-input"
          onChange={handleEditInputName}
          value={person.name}
          type="text"
        />
        <input
          className="edited-input"
          onChange={handleEditInputSurname}
          value={person.surname}
          type="text"
        />
        <input
          className="edited-input"
          onChange={handleEditInputPhone}
          value={person.phone}
          type="text"
        />
        <input
          className="edited-input"
          onChange={handleEditInputEmail}
          value={person.email}
          type="text"
        />
        <button
          onClick={() => props.handleSaveTask(person)}
          className="save-changes"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default Edit;

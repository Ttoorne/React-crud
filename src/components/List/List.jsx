import React from "react";
import "./list.css";

const List = (props) => {
  return (
    <div className="main-list">
      <h2 className="list-title">Контакты</h2>
      <ul className="list-item">
        {props.contacts.map((person) => (
          <li className="list" key={person.id}>
            <p>Имя: {person.name}</p>
            <p>Фамилия: {person.surname}</p>
            <p>Номер: {person.phone}</p>
            <p>Почта: {person.email}</p>
            <button
              className="edit-list"
              onClick={() => props.handleEdit(person)}
            >
              Изменить
            </button>
            <button
              className="delete-list"
              onClick={() => props.handleDelete(person.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

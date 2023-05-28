import React, { useState } from "react";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";

const App = () => {
  // для добавления
  const [contacts, setContacts] = useState([]);

  function addContact(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
  }

  // функция для удаления
  function handleDelete(id) {
    let newContacts = contacts.filter((person) => person.id !== id);
    setContacts(newContacts);
  }

  // редактирование
  // состояние для отображения модального окна
  const [modal, setModal] = useState(false);

  // состояние для редактируемого таска
  const [editTodo, setEditTodo] = useState({});

  // функция, которая срабатывает при нажатии на кнопку edit
  const handleEdit = (taskToEdit) => {
    setModal(true);
    setEditTodo(taskToEdit);
  };

  // функция для закрытия модального окна
  const handleCloseModal = () => {
    setModal(false);
  };

  // функция для сохранения отредактируемого таска
  const handleSaveTask = (updated) => {
    const newPerson = contacts.map((person) => {
      if (person.id == updated.id) {
        return updated;
      }
      return person;
    });

    setContacts(newPerson);
    handleCloseModal();
  };

  return (
    <div>
      <Add addContact={addContact} />
      <List
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <Edit
          handleSaveTask={handleSaveTask}
          editTodo={editTodo}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};

export default App;

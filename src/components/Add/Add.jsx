import React, { useState } from "react";
import "./add.css";

const Add = (props) => {
  // хранение данных
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSurname(e) {
    setSurname(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  //   функция, которая срабатывает при нажатии на кнопку add
  function handleAdd() {
    if (!name || !surname || !phone || !email) {
      alert("Заполните все поля");
      return;
    }

    const newContact = {
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      id: Date.now(),
    };

    props.addContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="add">
      <h2 className="add-title">Добавить в контакты</h2>
      <input
        value={name}
        onChange={handleName}
        className="name"
        placeholder="Имя"
        type="text"
      />
      <input
        value={surname}
        onChange={handleSurname}
        className="surName"
        placeholder="Фамилия"
        type="text"
      />
      <input
        value={phone}
        onChange={handlePhone}
        className="phone"
        placeholder="Номер телефона"
        type="text"
      />
      <input
        value={email}
        onChange={handleEmail}
        className="email"
        placeholder="Почта"
        type="text"
      />
      <button onClick={handleAdd} className="add-btn">
        Добавить
      </button>
    </div>
  );
};

export default Add;

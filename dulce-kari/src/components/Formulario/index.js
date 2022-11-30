import React from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";
import Swal from "sweetalert2";
import MyButton from "../MyButton"  

export const Mailer = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_mpbusug",
        "template_rrjghro",
        event.target,
        "klHSJBirMKyKYWa0L"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="div-form contacta">
      <h1 id="h1" className="title-form">Contáctanos</h1>
      <form className="form-mail" onSubmit={sendEmail}>
        <label>Nombre Completo</label>
        <input type="text" name="user_name" />
        <hr />

        <label>Email</label>
        <input type="email" name="user_email" />
        <hr />

        <label>Teléfono</label>
        <input type="tel" name="user_phone" />
        <hr />

        <label>Mensaje</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <MyButton className="btn btn-success">Enviar</MyButton>
      </form>
    </div>
  );
};

export default Mailer;
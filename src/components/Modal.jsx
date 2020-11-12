import React, { useState, useEffect } from "react";

const Modal = ({showModal, toggleModal, content}) => {
  const modalClassName = showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={modalClassName}>
      <section className="modal-body">
        <h3>{content.title}</h3>
        <button onClick={() => {toggleModal(!showModal)}}>x</button>
      </section>
    </div>
  );
};

export default Modal;

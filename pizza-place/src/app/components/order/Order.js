import React from "react";
import ParentForm from "../parent-form/ParentForm";
import "./Order.scss";

export default function Order() {
  return (
    <section className="order-container">
      <div className="order flex center">
        <div className="order__wrapper">
          <div className="title-wrapper flex center">
            <h1 className="order__title"> Faça seu pedido agora! </h1>
          </div>
          <section className="form-container">
            <ParentForm />
          </section>
        </div>
      </div>
    </section>
  );
}

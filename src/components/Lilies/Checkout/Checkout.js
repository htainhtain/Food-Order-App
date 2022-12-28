import React from "react";

import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Checkout.css";

const Checkout = (props) => {
  props.cartCloseHandler();
  return (
    <Modal closeHandler={props.closeHandler}>
      <section id="checkout-container">
        <div className="checkout">
          <header className="checkout-header">
            <h4 className="checkout-header__title">Checkout</h4>
          </header>
          <FormCard>
            <Input type="number" placeholder="Card Number" />
            <Input type="date" placeholder="Exp date" />
            <Input type="number" placeholder="CVV/CVV2" />
            <Input type="number" placeholder="Card Pin" />
            <Button type="submit" label="Make Payment" />
          </FormCard>
        </div>
      </section>
    </Modal>
  );
};

export default Checkout;

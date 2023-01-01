import React, { useContext, useEffect, useReducer } from "react";

import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import FormCard from "../../UI/FormCard/FormCard";

import "./Checkout.css";
import { mealContext } from "../../../context/MealContext";

const paymentReducer = (prevState, action) => {
  if (action.type === "CARD_NO_INPUT_CHANGED") {
    return {
      cardNo: action.value,
      expDate: prevState.expDate,
      cvv: prevState.cvv,
      pin: prevState.pin,
      formIsValid:
        action.value && prevState.expDate && prevState.cvv && prevState.pin,
    };
  }
  if (action.type === "EXP_DATE_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: action.value,
      cvv: prevState.cvv,
      pin: prevState.pin,
      formIsValid:
        prevState.cardNo && action.value && prevState.cvv && prevState.pin,
    };
  }
  if (action.type === "CVV_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: prevState.expDate,
      cvv: action.value,
      pin: prevState.pin,
      formIsValid:
        prevState.cardNo && prevState.expDate && action.value && prevState.pin,
    };
  }
  if (action.type === "PIN_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: prevState.expDate,
      cvv: prevState.cvv,
      pin: action.value,
      formIsValid:
        prevState.cardNo && prevState.expDate && prevState.cvv && action.value,
    };
  }
  if (action.type === "CLEAR_INPUT") {
    return {
      cardNo: "",
      expDate: "",
      cvv: "",
      pin: "",
      formIsValid: false,
    };
  }
};

const Checkout = (props) => {
  const mealCtx = useContext(mealContext);
  const { clearMealFromCart } = mealCtx;
  const { selectedMeals } = mealCtx;
  const { addOrders } = mealCtx;

  useEffect(() => {
    props.cartCloseHandler();
  }, []);

  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    cardNo: "",
    expDate: "",
    cvv: "",
    pin: "",
    formIsValid: false,
  });

  const cardNoChangehandler = (e) => {
    paymentDispatch({
      type: "CARD_NO_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const expDateChangehandler = (e) => {
    paymentDispatch({
      type: "EXP_DATE_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const cvvChangehandler = (e) => {
    paymentDispatch({
      type: "CVV_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const pinChangehandler = (e) => {
    paymentDispatch({
      type: "PIN_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const checkOutSubmitHandler = (e) => {
    e.preventDefault();
    const checkOutMeals = selectedMeals.selectedMeals;
    addOrders(checkOutMeals);
    clearMealFromCart();
    paymentDispatch({
      type: "CLEAR_INPUT",
    });
  };

  return (
    <Modal closeHandler={props.closeHandler}>
      <section id="checkout-container">
        <div className="checkout">
          <header className="checkout-header">
            <h4 className="checkout-header__title">Checkout</h4>
          </header>
          <FormCard submitHandler={checkOutSubmitHandler}>
            <Input
              type="text"
              id="card-no"
              name="card-no"
              placeholder="1111-2222-3333-4444"
              value={paymentState.cardNo}
              onChangeHandler={cardNoChangehandler}
            />
            <Input
              type="text"
              id="card-exp-date"
              name="card-exp-date"
              placeholder="MM/YYYY"
              value={paymentState.expDate}
              onChangeHandler={expDateChangehandler}
            />
            <Input
              type="text"
              id="card-cvv"
              name="card-cvv"
              placeholder="CVV/CVV2"
              value={paymentState.cvv}
              onChangeHandler={cvvChangehandler}
            />
            <Input
              type="text"
              id="card-pin"
              name="card-pin"
              placeholder="Card Pin"
              value={paymentState.pin}
              onChangeHandler={pinChangehandler}
            />
            <Button
              type="submit"
              label="Make Payment"
              formIsValid={paymentState.formIsValid}
            />
          </FormCard>
        </div>
      </section>
    </Modal>
  );
};

export default Checkout;

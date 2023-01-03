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
      cardNoIsValid: /^\d+$/.test(action.value),
      expDateIsValid: prevState.expDateIsValid,
      cvvIsValid: prevState.cvvIsValid,
      pinIsValid: prevState.pinIsValid,
      formIsValid:
        /^\d+$/.test(action.value) &&
        prevState.expDateIsValid &&
        prevState.cvvIsValid &&
        prevState.pinIsValid,
    };
  }
  if (action.type === "EXP_DATE_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: action.value,
      cvv: prevState.cvv,
      pin: prevState.pin,
      cardNoIsValid: prevState.cardNoIsValid,
      expDateIsValid: action.value ? true : false,
      cvvIsValid: prevState.cvvIsValid,
      pinIsValid: prevState.pinIsValid,
      formIsValid:
        prevState.cardNoIsValid && action.value
          ? true
          : false && prevState.cvvIsValid && prevState.pinIsValid,
    };
  }
  if (action.type === "CVV_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: prevState.expDate,
      cvv: action.value,
      pin: prevState.pin,
      cardNoIsValid: prevState.cardNoIsValid,
      expDateIsValid: prevState.expDateIsValid,
      cvvIsValid: action.value ? true : false,
      pinIsValid: prevState.pinIsValid,
      formIsValid:
        prevState.cardNoIsValid && prevState.expDateIsValid && action.value
          ? true
          : false && prevState.pinIsValid,
    };
  }
  if (action.type === "PIN_INPUT_CHANGED") {
    return {
      cardNo: prevState.cardNo,
      expDate: prevState.expDate,
      cvv: prevState.cvv,
      pin: action.value,
      cardNoIsValid: prevState.cardNoIsValid,
      expDateIsValid: prevState.expDateIsValid,
      cvvIsValid: prevState.cvvIsValid,
      pinIsValid: /^\d+$/.test(action.value),
      formIsValid:
        prevState.cardNoIsValid &&
        prevState.expDateIsValid &&
        prevState.cvvIsValid &&
        /^\d+$/.test(action.value),
    };
  }
  if (action.type === "CLEAR_INPUT") {
    return {
      cardNo: "",
      expDate: "",
      cvv: "",
      pin: "",
      cardNoIsValid: true,
      expDateIsValid: true,
      cvvIsValid: true,
      pinIsValid: true,
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
  }, [props]);

  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    cardNo: "",
    expDate: "",
    cvv: "",
    pin: "",
    cardNoIsValid: true,
    expDateIsValid: true,
    cvvIsValid: true,
    pinIsValid: true,
    formIsValid: false,
  });

  const cardNoChangehandler = (e) => {
    paymentDispatch({
      type: "CARD_NO_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const cardNoOnBlurHandler = (e) => {
    if (!paymentState.cardNoIsValid) {
      e.currentTarget.focus();
    }
  };

  const expDateChangehandler = (e) => {
    paymentDispatch({
      type: "EXP_DATE_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const expDateOnBlurHandler = (e) => {
    if (!paymentState.expDateIsValid) {
      e.currentTarget.focus();
    }
  };

  const cvvChangehandler = (e) => {
    paymentDispatch({
      type: "CVV_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const cvvOnBlurHandler = (e) => {
    if (!paymentState.cvvIsValid) {
      e.currentTarget.focus();
    }
  };

  const pinChangehandler = (e) => {
    paymentDispatch({
      type: "PIN_INPUT_CHANGED",
      value: e.currentTarget.value,
    });
  };

  const pinOnBlurHandler = (e) => {
    if (!paymentState.pinIsValid) {
      e.currentTarget.focus();
    }
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
              onBlurHandler={cardNoOnBlurHandler}
              className={!paymentState.cardNoIsValid ? "not-valid" : ""}
            />
            <Input
              type="text"
              id="card-exp-date"
              name="card-exp-date"
              placeholder="MM/YYYY"
              value={paymentState.expDate}
              onChangeHandler={expDateChangehandler}
              onBlurHandler={expDateOnBlurHandler}
              className={!paymentState.expDateIsValid ? "not-valid" : ""}
            />
            <Input
              type="text"
              id="card-cvv"
              name="card-cvv"
              placeholder="CVV/CVV2"
              value={paymentState.cvv}
              onChangeHandler={cvvChangehandler}
              onBlurHandler={cvvOnBlurHandler}
              className={!paymentState.cvvIsValid ? "not-valid" : ""}
            />
            <Input
              type="text"
              id="card-pin"
              name="card-pin"
              placeholder="Card Pin"
              value={paymentState.pin}
              onChangeHandler={pinChangehandler}
              onBlurHandler={pinOnBlurHandler}
              className={!paymentState.pinIsValid ? "not-valid" : ""}
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

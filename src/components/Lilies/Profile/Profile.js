import React, { useContext } from "react";

import { authContext } from "../../../context/AuthContext";
import Button from "../../UI/Button/Button";

import Modal from "../../UI/Modal/Modal";

const Profile = (props) => {
  const authCtx = useContext(authContext);
  const { logOutHandler } = authCtx;

  return (
    <Modal closeHandler={props.profileCloseHandler}>
      <section id="checkout-container">Profile</section>
      {/* <Button onClick={logOutHandler}>Log out</Button> */}
      <Button
        type="button"
        label="LOGOUT"
        formIsValid={true}
        onClickHandler={logOutHandler}
      />
    </Modal>
  );
};

export default Profile;

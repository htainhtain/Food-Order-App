import React from "react";

import Modal from "../../UI/Modal/Modal";

const Profile = (props) => {
  return (
    <Modal closeHandler={props.profileCloseHandler}>
      <section id="checkout-container">Profile</section>
    </Modal>
  );
};

export default Profile;

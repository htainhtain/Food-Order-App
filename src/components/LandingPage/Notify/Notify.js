import React from "react";

import "./Notify.css";

const Notify = () => {
  return (
    <section id="notify-container">
      <div className="notify">
        <header className="notify-description">
          <h3 className="notify-description-title">
            Get notified when we update!
          </h3>
          <p className="notify-description-description">
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </header>
        <form className="notify-form">
          <input
            type="email"
            placeholder="johdoe@example.com"
            className="notify-form-input"
          />
          <button className="notify-form-button">Get notified</button>
        </form>
      </div>
    </section>
  );
};

export default Notify;

import React, { useState } from "react";
import "./response.css";

function Response() {
  const [hideBoxOne, showBoxOne] = useState("");

  function ChangeButton(id) {
    showBoxOne(id);
  }

  return (
    <div className="didyoufound">
      <div className="found-title">
        <h3>Did you find what you were looking for?</h3>
      </div>
      <div className="did-buttons">
        <button
          onClick={(event) => ChangeButton(event.target.id)}
          id="button-yes"
        >
          yes
        </button>
        <button
          onClick={(event) => ChangeButton(event.target.id)}
          id="button-no"
        >
          no
        </button>
      </div>
      <div>
        {hideBoxOne === "button-yes" ? (
          <div class="answer-box">
            <div className="answer-div">
              We were happy to assist you! You can choose to replace your tires
              today. You can order the service online HERE, or you can contact
              us via e-mail, social media or by phone!
            </div>
          </div>
        ) : (
          <></>
        )}
        {hideBoxOne === "button-no" ? (
          <div class="answer-box">
            <div className="answer-div">
              Tell us what you were looking for, our customer service will know
              the answer!
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Response;

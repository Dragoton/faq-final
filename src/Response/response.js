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
            <div className="answer-div">This is the FIRST div</div>
          </div>
        ) : (
          <></>
        )}
        {hideBoxOne === "button-no" ? (
          <div class="answer-box">
            <div className="answer-div">This is the SECOND div</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Response;

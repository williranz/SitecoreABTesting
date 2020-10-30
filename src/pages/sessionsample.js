import React from "react";
import Session from "react-session-api";
import Counter from "../components/Counter";
import IncreaseButton from "../components/IncreaseButton";
import DecreaseButton from "../components/DecreaseButton";
import "../components/styles.css";

const SessionSample = () => {
    Session.set("counter", 0);
    return (
      <div className="SessionSample">
        <header className="App-header">
          <div className="row main-div">
            <div className="col-md-12">
              <div className="component-div set float-left">
                <p>Counter.js</p>
                <Counter />
              </div>
              <div className="component-div float-right">
                <p>IncreaseButton.js</p>
                <IncreaseButton />
              </div>
              <br />
              <div className="component-div float-right">
                <p>DecreaseButton.js</p>
                <DecreaseButton />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default SessionSample
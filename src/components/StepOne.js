import React from "react";
import "../assets/css/StepOne.css";

export default function StepOne() {
  const gotoParty = () => {
    window.location.href =
      "https://www.google.com/maps/place/Quinta+Pepe+Reina/@-34.9423244,-58.1586701,17z/data=!3m1!4b1!4m6!3m5!1s0x95a2dba60c6566af:0x542df2f0ca6ee16a!8m2!3d-34.9423244!4d-58.1586701!16s%2Fg%2F11qp7q4xly?entry=ttu";
  };
  return (
    <div className="civil-content">
      <div>
        <h2>Ceremonia y fiesta</h2>
        <p>
          Día 28 de septiembre a las 17:00hs en Quinta "Pepe Reina"
        </p>
        <button className="primary-button" onClick={gotoParty}>
          Cómo llegar
        </button>
      </div>
    </div>
  );
}

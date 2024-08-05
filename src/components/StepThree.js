import React from "react";
import "../assets/css/StepThree.css";

export default function StepThree() {
  const safePath = require.context("../assets/static/", true);

  const cvu = "0270033520049257710010";

  const copyCVUToClipboard = () => {
    const input = document.createElement("input");
    input.value = cvu;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert(
      "Cbu copiado, ya podes pegar el cbu en tu cuenta para transferir dinero!"
    );
  };
  const gotoGiftList = () => {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1ed0B_w7CkTivOmccS0wkihMSnFCdj_THJpyttQHYioU/edit?gid=0#gid=0";
  };

  const gotoPlayList = () => {
    window.location.href =
      "https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F03oru7Vn0FsbbQvWeKbQiL%3Fsi%3D3mShV45TRg2lIBQ5WzQAMQ%26pt%3De450e52440aa7dba3dc5e06723bf14a5%26pi%3Du-cUEhXBUNR5Ku";
  };

  const sendConfirm = () => {
    let text = "Confirmo la invitación";
    const number = localStorage.getItem("tel");

    window.location.href = `https://wa.me/${number}?text=${text}`;
  };

  return (
    <div className="step-three">
      <div className="card">
        <img src={safePath("./dress.png")} alt="" />
        <p>Dresscode:</p>
        <h2>Elegante</h2>
      </div>
      <div className="card">
        <img src={safePath("./music.png")} alt="" />
        <p>Agrega las canciones que no pueden faltar</p>
        <button className="primary-button" onClick={gotoPlayList}>
          Playlist
        </button>
      </div>
      <div className="card">
        <img src={safePath("./gift.png")} alt="" />
        <p>Si deseas hacernos un regalo</p>
        <button className="primary-button" onClick={gotoGiftList}>
          Ver lista
        </button>
      </div>
      <div className="card">
        <img src={safePath("./money.png")} alt="" />
        <h3>Si deseas colaborar con nuestra luna de miel</h3>
        <p>Alias: SOFICOSITAS6</p>
        <button className="primary-button" onClick={copyCVUToClipboard}>
          Copiar CBU
        </button>
      </div>
      <div className="step-three-confirm">
        <p>
          Gracias por acompañarnos en este momento tan especial <br></br>
        </p>
        <button className="primary-button" onClick={sendConfirm}>
          Confirmar asistencia
        </button>
      </div>
    </div>
  );
}

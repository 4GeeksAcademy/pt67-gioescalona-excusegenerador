/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let excuseGenerator = () => {
    let article = ["¡La", "¡Una"];
    let substantive = ["niña", "paciente", "cajero", "jefe"];
    let action = ["se fue", "no trajo", "no vino", "enfermó"];
    let thing = ["a su casa", "la compra", "el dia de hoy", "una ola"];
    let where = [
      "en el trabajo!",
      "en casa!",
      "en el supermercado!",
      "en la playa!",
      "en el hospital!"
    ];

    let artHtml = Math.floor(Math.random() * article.length);
    let subsHtml = Math.floor(Math.random() * substantive.length);
    let actionHtml = Math.floor(Math.random() * action.length);
    let thingHtml = Math.floor(Math.random() * thing.length);
    let whereHtml = Math.floor(Math.random() * where.length);

    return (
      article[artHtml] +
      " " +
      substantive[subsHtml] +
      " " +
      action[actionHtml] +
      " " +
      thing[thingHtml] +
      " " +
      where[whereHtml]
    );
  };

  document.querySelector("#key").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

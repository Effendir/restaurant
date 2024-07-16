import _ from "lodash";
import "./style.css";
import header from "./header.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import createFooter from "./footer.js";

header();
home();
document.body.appendChild(createFooter());
document.querySelector("#home").addEventListener("click", home);
document.querySelector("#contact").addEventListener("click", contact);
document.querySelector("#menu").addEventListener("click", menu);

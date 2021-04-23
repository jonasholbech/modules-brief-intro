import "./style.css";
import { getRandomColor } from "./helpers.js";
import { get, post, put } from "./rest.js";
document.body.style.background = getRandomColor();

//get("https://swapi.dev/api/people/1");

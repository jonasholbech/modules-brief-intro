import "./style.css";
import { getRandomColor, teachers } from "./helpers.js";
import { get, post, put } from "./rest.js";

//make rhis avaivale on the global scope
//window.teachers = teachers;

document.body.style.background = getRandomColor();

//get("https://swapi.dev/api/people/1");

import "./main.css";
import component from "./component";
import { bake } from "./shake"

document.body.appendChild(component());

bake();

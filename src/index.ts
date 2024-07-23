import './styles.css';
import { greet } from './greet';
import logo from './pblogo.png'

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img)

console.log(greet('PASHA BANK'));



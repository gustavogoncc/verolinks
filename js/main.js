import { Hero } from './components/Hero.js';
import { Links } from './components/Links.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${Hero()}
  ${Links()}
  ${Footer()}
`;
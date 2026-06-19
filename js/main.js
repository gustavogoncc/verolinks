import { Hero } from './components/hero.js';
import { Links } from './components/links.js';
import { Footer } from './components/footer.js';

const app = document.getElementById('app');

app.innerHTML = `
  ${hero()}
  ${links()}
  ${footer()}
`;
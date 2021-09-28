import mona from '../mona.png';
import mains from '../mains.jpeg';
import drinks from '../drinks.jpeg';

import styles from './style.css';

export default function Menu() {
  const div = document.getElementById('contentBody');
  div.textContent = '';

  const menuBody = document.createElement('div');
  menuBody.className = styles.menuBody;

  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  h1.className = styles.title;
  div.appendChild(h1);

  const img = new Image();
  img.src = mona;
  img.className = styles.img;

  const main = new Image();
  main.src = mains;
  main.className = styles.img;

  const drink = new Image();
  drink.src = drinks;
  drink.className = styles.img;

  menuBody.appendChild(img);
  menuBody.appendChild(main);
  menuBody.appendChild(drink);

  div.appendChild(menuBody);
}

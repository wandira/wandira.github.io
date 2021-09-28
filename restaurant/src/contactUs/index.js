import noelle from '../noelle.png';

import styles from './style.css';

export default function ContactUs() {
  const div = document.getElementById('contentBody');
  div.textContent = '';

  const span = document.createElement('h1');
  span.textContent = 'Contact Us';
  span.className = styles.title;
  div.appendChild(span);

  const body = document.createElement('div');
  body.className = styles.body;
  div.appendChild(body);

  const num = document.createElement('h3');
  num.textContent = '0812xxxxxx';
  num.className = styles.number;
  body.appendChild(num);

  const img = new Image();
  img.src = noelle;
  img.className = styles.img;
  body.appendChild(img);
}

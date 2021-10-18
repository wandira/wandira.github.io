function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'cek console';

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function printMe() {
    console.log('I get called from index.js!');
  };
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

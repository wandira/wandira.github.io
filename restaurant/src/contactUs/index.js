import noelle from '../noelle.png'

import styles from'./style.css'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('h1')
    span.textContent = "Contact Us"
    span.className = styles.title
    div.appendChild(span)

    const img = new Image()
    img.src = noelle
    img.className = styles.img
    div.appendChild(img)
}
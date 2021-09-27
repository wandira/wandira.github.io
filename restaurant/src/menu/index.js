import mona from '../mona.png'

import styles from'./style.css'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const h1 = document.createElement('h1')
    h1.textContent = "Menu"
    h1.className = styles.title
    div.appendChild(h1)

    const img = new Image()
    img.src = mona
    img.className = styles.img
    div.appendChild(img)
}

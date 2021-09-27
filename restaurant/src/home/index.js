import albedo from '../albedo.png'
import xingqiu from '../xingqiu.png'

import styles from'./style.css'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('h1')
    span.textContent = "Home"
    span.className = styles.title
    div.appendChild(span)

    const img = new Image()
    img.src = albedo
    img.className = styles.img
    div.appendChild(img)

    // const img2 = new Image()
    // img2.src = xingqiu
    // div.appendChild(img2)
}
        
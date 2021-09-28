import albedo from '../albedo.png'
import xingqiu from '../xingqiu.png'

import styles from'./style.css'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''

    const home = document.createElement('div')
    
    const title = document.createElement('h1')
    title.textContent = "Welcome to Albedo's Cafe"
    title.className = styles.title
    home.appendChild(title)


    const img = new Image()
    img.src = albedo
    img.className = styles.img
    home.appendChild(img)

    const sub = document.createElement('h2')
    sub.textContent = "Please take a look at our menu"
    sub.className = styles.subtitle
    home.appendChild(sub)

    // const img2 = new Image()
    // img2.src = xingqiu
    
    div.appendChild(home)

}
        
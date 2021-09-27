import mona from './mona.png'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = "Menu"
    div.appendChild(span)

    const img = new Image()
    img.src = mona
    div.appendChild(img)
}

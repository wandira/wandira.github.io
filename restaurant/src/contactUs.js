import noelle from './noelle.png'
export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = "Contact Us"
    div.appendChild(span)

    const img = new Image()
    img.src = noelle
    div.appendChild(img)
}
import albedo from './albedo.png'
import xingqiu from './xingqiu.png'

export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = "Home"
    div.appendChild(span)

    const img = new Image()
    img.src = albedo
    div.appendChild(img)

    const img2 = new Image()
    img2.src = xingqiu
    div.appendChild(img2)
}
        
export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = "Menu"
    div.appendChild(span)
}

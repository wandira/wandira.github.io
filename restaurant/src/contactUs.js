
export default function (){
    const div = document.getElementById('contentBody')
    div.textContent = ''
    
    const span = document.createElement('span')
    span.textContent = "Contact Us"
    div.appendChild(span)
}
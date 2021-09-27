import Home from './home'
import ContactUs from './contactUs'
import Menu from './menu'

import styles from './style.css'

export default function runThisOnPageLoad(){
    function renderMenu(){
        Menu()
    }

    function renderContactUs(){
        ContactUs()
    }

    function renderHome(){
        Home()
    }

    window.onload = function () {

        console.log('This will log only once')
        const div = document.getElementById('content')
        div.className = styles.content

        const contentBody = document.createElement('div')
        contentBody.className = styles.contentBody
        contentBody.id = 'contentBody'

        const contentNav = document.createElement('div')
        contentNav.className = styles.contentNav
        const navbarItems = document.createElement('ul')

        const img = new Image()
        img.src = 'https://cdn-icons-png.flaticon.com/512/3208/3208003.png'
        img.className = styles.navImg
        const navImg = document.createElement('li')
        navImg.appendChild(img)
        navImg.addEventListener('click',renderHome)

        const item1 = document.createElement('li')
        const link1 = document.createElement('a')
        link1.textContent = "Menu"
        link1.addEventListener('click',renderMenu)
        item1.appendChild(link1)

        const item2 = document.createElement('li')
        const link2 = document.createElement('a')
        link2.textContent = "Contact Us"
        link2.addEventListener('click',renderContactUs)
        item2.appendChild(link2)


        navbarItems.appendChild(navImg)
        navbarItems.appendChild(item1)
        navbarItems.appendChild(item2)
        contentNav.appendChild(navbarItems)
    

        const footer = document.createElement('div')

        footer.innerHTML= 'Icons made by&nbsp;<a href="https://www.freepik.com" title="Freepik">Freepik</a>&nbsp;from&nbsp;<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
        footer.className = styles.footer

        div.appendChild(contentNav)
        div.appendChild(contentBody)
        div.appendChild(footer)
        renderHome()
    }
}
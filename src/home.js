
import acountimage from './images/acount-image.jpeg'

export const home=function (){
    const content=document.querySelector('#content')

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    const title=document.createElement('h1')
    title.textContent="My restaurant"
    content.appendChild(title)

    const about=document.createElement('h3')
    about.textContent="This is the best restaurant in the world"
    content.appendChild(about)

    const image=document.createElement('img')
    image.src=acountimage
    image.alt="kakashi"
    content.appendChild(image)
}


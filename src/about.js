

export const about=function(){
    
    const content=document.querySelector('#content')

    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    const title=document.createElement('h1')
    title.textContent="About"
    content.appendChild(title)

    const about=document.createElement('p')
    about.textContent="This is the best restaurant in the world and bla bla bla some text"
    content.appendChild(about)

}
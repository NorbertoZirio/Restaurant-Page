

export const menu=function(){

    const content=document.querySelector('#content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }

    const title=document.createElement('h1')
    title.textContent="Menu"
    content.appendChild(title)

    const list=document.createElement('ul')
    list.innerHTML=`<li>Plato 1</li>
            <li>Plato 2</li>
            <li>Plato 3</li>`
    content.appendChild(list)

}
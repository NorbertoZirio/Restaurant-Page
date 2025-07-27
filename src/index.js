import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const homebutton=document.querySelector('#home')
homebutton.addEventListener('click', ()=>home())

const menubutton=document.querySelector('#menu')
menubutton.addEventListener('click', ()=>menu())

const aboutbutton=document.querySelector('#about')
aboutbutton.addEventListener('click', ()=>about())


/*home()
menu()
about()*/


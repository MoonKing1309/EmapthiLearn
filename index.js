const navExpander = document.getElementById('navExpander');
const navbar = document.getElementsByClassName('navbar')[0];
const navLogo = document.getElementsByClassName('navLogo')[0];
const navItems = document.getElementsByClassName('navItems')[0];
const navButtons = document.getElementsByClassName('navButtons')[0];
const navExpand = document.getElementsByClassName('navExpand')[0];

navExpander.addEventListener('click',()=>{
    navbar.style.minHeight = "200px";
    
    navbar.style.flexDirection = 'column';
    navbar.style.display = 'inline-flex';
    navbar.style.position = 'fixed'

    navItems.style.flexDirection = 'column';
    navItems.style.display = 'inline-flex';

    navButtons.style.display = 'inline-flex';
    navButtons.style.flexDirection = 'column';


    navLogo.style.marginRight = 'auto';
    navLogo.style.display = 'inline-block'
})
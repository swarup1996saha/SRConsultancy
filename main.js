window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
})
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa fa-solid fa-plus'){
            icon.className = "fa fa-solid fa-minus";
        }else{
            icon.className = "fa fa-solid fa-plus";
        }
    })
})

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const colseBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    colseBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

const closeNav = ()=>{
    menu.style.display = 'none';
    colseBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

colseBtn.addEventListener('click',closeNav);
const container=document.querySelectorAll('.container')
const toggles=document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle =>{
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
} )
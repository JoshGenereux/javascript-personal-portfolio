const about = document.getElementById('about-btn')
const skills = document.getElementById('skills-btn')
const projects = document.getElementById('projects-btn')
const links = document.getElementById('links-btn')
const aTop = document.getElementById('about-home')
const sTop = document.getElementById('skills-home')

about.addEventListener('click', ()=>{
    document.getElementById('about').scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    console.log('about')
})

skills.addEventListener('click', ()=>{
    document.getElementById('skills').scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    console.log('about')
})

projects.addEventListener('click', ()=>{
    document.getElementById('projects').scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    console.log('about')
})

aTop.addEventListener('click', ()=>{
    document.getElementById('name-sect').scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})

sTop.addEventListener('click', ()=>{
    document.getElementById('name-sect').scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})
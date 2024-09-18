const hambergerIcon = document.querySelector("body > header > div.Icon-bar")
const nav = document.querySelector("body > header > div.header-content > nav")
const timesIcon = document.querySelector("body > header > div.header-content > nav > span")

hambergerIcon.addEventListener('click',() =>{
    nav.classList.add('menu-open')

})

timesIcon.addEventListener('click',() =>{
    nav.classList.remove('menu-open')
  
})




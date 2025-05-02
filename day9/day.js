let website = document.querySelector('body')
console.log(website)
let btn = document.querySelector('button')

btn.addEventListener('click',() => {
website.classList.toggle('night')
})
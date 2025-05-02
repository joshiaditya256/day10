let z = document.querySelector('h1')
let btn = document.querySelector('button')

console.log(z)
console.log(btn)

btn.addEventListener('click', () => {
  z.textContent = 'demo of es6'
  z.style.background = 'red'
})

let line = document.querySelector('h3')
console.log(line)

let theButton = document.querySelectorAll('button')[1] // ✅ fixed
console.log(theButton)

theButton.addEventListener('click', () => {
  line.style.background = 'red'
})

let theInput = document.getElementById('s')
let myInfo = document.querySelector('input')

myInfo.addEventListener('input', () => {
    theInput.textContent = myInfo.value
})

//if we use 'change' insted of 'input' we have to press enter , input runs on real time 
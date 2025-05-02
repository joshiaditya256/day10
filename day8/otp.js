// let z = Math.floor(Math.random()*10)
// console.log(z)
// console.log(Math.floor(0.073454535242424*10))



let btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click', ()=>{
    let otp = ""
    for(i = 0; i <6; i++){
        otp += Math.floor(Math.random()*10)
       console.log(otp)
    }
    document.getElementById('s').textContent = otp
})
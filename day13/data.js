
const heros = [

 {
    name : "sharukh",
    age : "58",
    hobbies : ["coffee","acting","sleeping"]

}, 
{
   name : "salman",
   age : "60",
   hobbies : ["read","gym","cars"]

} , {
    name : "sanjay",
    age : "62",
    hobbies : ["write","bike","cricket"]
 
 } ]
//  z.textContent = (hero.name)
//  document.querySelectorAll('span')[0].textContent = (hero.name)
//  document.querySelectorAll('span')[1].textContent = (hero.hobbies[2])

document.querySelectorAll('span')[0].textContent = (heros[1].name)
document.querySelectorAll('span')[1].textContent = (heros[1].hobbies[1])
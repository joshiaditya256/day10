fetch("https://sweetfruit.vercel.app/fruits")
.then(response => response.json())
  .then(data => {
    console.log(data); 
    document.querySelectorAll('span')[0].textContent = `${data[5].name}, ${data[6].name}, ${data[2].name}`;
    document.querySelectorAll('span')[1].textContent = data[5].taste;

  })          


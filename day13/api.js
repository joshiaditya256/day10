fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    document.querySelectorAll('span')[0].textContent = data[9].name;
    document.querySelectorAll('span')[1].textContent = data[9].email;
    document.querySelectorAll('span')[2].textContent = data[9].username;
  })
 
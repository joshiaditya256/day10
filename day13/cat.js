


  function catty() {

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
   document.querySelector('img').src = data[0].url
    })
  }
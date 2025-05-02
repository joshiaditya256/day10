let b1 = document.querySelectorAll('button')[0];
let b2 = document.querySelectorAll('button')[1];
let photo = document.querySelector('img');

b1.addEventListener('click', () => {
  photo.src = "happy.jpg";  // Make sure this image exists in the same folder or provide the correct path
});

b2.addEventListener('click', () => {
  photo.src = "sad.jpg";  // Same for this image
});

z = document.getElementById("a");
console.log("hello");

function abc() {
  if (z.style.background == "red") {
    z.style.background = "blue";
  } else if (z.style.background == "blue") {
    z.style.background = "yellow";
  } else if (z.style.background == "yellow") {
    z.style.background = "green";
  } else if (z.style.background == "green") {
    z.style.background = "pink";
  } else {
    z.style.background = "red";
  }
}

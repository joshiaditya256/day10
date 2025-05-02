z = document.getElementById("a");
console.log(a);

function abc() {
  if (z.style.color == "blue") {
    z.style.color = "yellow";
  } else {
    z.style.color = "blue";
  }

  if (z.style.background == "aqua") {
    z.style.background = "white";
  } else {
    z.style.background = "aqua";
  }

  z.textContent = "learn js";
}

x = document.getElementById("c");
console.log(c);

function me() {
  if (x.style.visibility == "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

if (document.getElementById('validatedCustomFile')) {
  document.querySelector('.custom-file-input').addEventListener('change',function(e){
    let fileName = document.getElementById("validatedCustomFile").files[0].name;
    let nextSibling = e.target.nextElementSibling
    nextSibling.innerText = fileName
  })
}

const textContent = ["Lanche natural?", "Café?", "Brigadeiro?", "Pipoca?", "Batatinha?", "Bolo de pote?", "Banana?", "Milho cozido?"]
let counter = 1;


function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          element.style.display = 'none';
          clearInterval(timer);
          setText(element);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.2;
  }, 10);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display= 'block';
  var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
        setTimeout(() => {fade(element)}, 3000)
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.2;
  }, 10);
}

function setText (element) {
    element.innerText = textContent[counter];
    if (counter < textContent.length - 1) {
      counter += 1;
    } else {
      counter = 0;
    }
    unfade(element);
}

if (document.getElementById("text-change")) {
  const textChange = document.getElementById("text-change");
  const cycle = () => fade(textChange);
  let myTimer = setTimeout(cycle, 4000);
}
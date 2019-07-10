function alert_name(){
  //Create name variable
  var greeting = "Welcome to my site!! "
  var sentence = "and this is a little bit about myself!"
  var name = "Brenda ";
  alert(greeting + "My name is " + name + sentence)
console.log("Test 123")
}

function change_image(){
  var image = document.getElementById('ME_image')
  image.src = "Images/ME.jpg"
}

function increase_size(){
  var image = document.getElementById('image')
  image.style.width = "800px";
}

function decrease_size(){
  var image = document.getElementById('image')
  image.style.width = "400px";
}

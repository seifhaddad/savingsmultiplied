

function hide(element){
  element.style.display= "none";
}

function show(element) {
  element.style.display= "block";
}
var loginModal = document.querySelector('login-modal');
var lightbox= document.querySelector('lightbox');
var loginLink= document.querySelector('login');
var cancelButton = document.querySelector('input[value="cancel"]');

lightbox.addEventListener('click', function(){
    hide(loginModal);
});

cancelButton.addEventListener('click', function() {
  hide(loginModal);
});

loginlink.addEventListener('click', function() {
  show(loginModal);
  });
});

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

//---login--//

// Simulasi data pengguna yang sudah terdaftar
var users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var foundUser = users.find(function(user) {
    return user.email === email && user.password === password;
  });
  if (foundUser) {
    alert('Login berhasil!');
    // Redirect ke halaman lain setelah login berhasil
    // window.location.href = 'dashboard.html';
  } else {
    showError('Email atau password salah');
  }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;
  var foundUser = users.find(function(user) {
    return user.email === email;
  });
  if (foundUser) {
    showError('Email sudah terdaftar');
  } else {
    users.push({ email: email, password: password });
    alert('Registrasi berhasil! Silakan login.');
    // Reset form setelah registrasi berhasil
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
  }
});

function showError(message) {
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;
  var loginForm = document.getElementById('loginForm');
  loginForm.appendChild(errorDiv);
}

let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
let search = document.querySelector('.search')
let dash = document.querySelector('.dashboard')

btn.addEventListener('click', function() {  
  sidebar.classList.toggle('active');
  dash.classList.toggle('active');
})

search.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  dash.classList.toggle('active');
})
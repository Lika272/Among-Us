let dropdown = document.getElementsByClassName("dropdown-btn");
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let dropdownContent = this.nextElementSibling;

  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

let sidebar = document.querySelector('.sidenav');
let mainContent = document.querySelector('.main');
document.querySelector('.icon').onclick = function () {
  sidebar.classList.toggle('sidenavsm');
  mainContent.classList.toggle('mainlg');
}
let sidebar1 = document.querySelector('.sidenav');
let mainContent1 = document.querySelector('.main');
document.querySelector('.icon').onclick = function () {
  sidebar1.classList.toggle('sidenavsm1');
  mainContent1.classList.toggle('mainlg1');
}

toggleChevron = function(button) {
    $(button).find('i').toggleClass(' fa-caret-down , fa-caret-up');
  }
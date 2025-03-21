//Scrolling behavior

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Menus

const dinnerBtn = document.getElementById("dinner-btn");
const lunchBtn = document.getElementById("lunch-btn");
const drinksBtn = document.getElementById("drink-btn")

const dinnerMenu = document.getElementById("dinner-menu");
const lunchMenu = document.getElementById("lunch-menu");
const drinksMenu = document.getElementById("drink-menu");

const activeFilter = document.getElementsByClassName("btn1");

function showDinner(){
    dinnerMenu.style.display="block";
    lunchMenu.style.display="none";
    drinksMenu.style.display="none";


    dinnerBtn.classList.add="active";
}

function showLunch(){
    lunchMenu.style.display="block";
    dinnerMenu.style.display="none";
    drinksMenu.style.display="none";


    activeFilter.classList.add="active";

}

function showDrinks(){
  drinksMenu.style.display="block";
  dinnerMenu.style.display="none";
  lunchMenu.style.display="none";


}


// Filter Menu lånat från W3 schools exempel och modifierat

filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterLi");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Calculate cost

function calcItems(){
    let input = document.getElementsByClassName("checkbox");
    let total = 0;
    for (let i = 0; i < input.length; i++)
    {
      if (input[i].checked)
      {
          total += parseInt(input[i].value);
      }
    }
    document.getElementById("total").value = total.toFixed(2) + "€";
}

// Reservation Button alert

const resBtn = document.getElementById("resBtn");
resBtn.addEventListener("click", reservation);

function reservation(){
  alert("You've made a reservation!");
}



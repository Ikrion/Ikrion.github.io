//target all elements to save to constants
const section1btn=document.querySelector("#section1btn");
const section2btn=document.querySelector("#section2btn");
const section3btn=document.querySelector("#section3btn");
const allsection=document.querySelectorAll(".section");
const allcomponent=document.querySelectorAll(".components");

//select all subtopic pages
console.log(allsection);
hideall();

function hideall(){ //function to hide all pages
	for(let onesection of allsection){ //go through all subtopic pages
		onesection.style.display="none"; //hide it
	}
	for(let onecomponent of allcomponent){ //go through all the components
		onecomponent.style.display="none"; //hide it
	}
}

function show(pgno){ //function to show selected page no
	hideall();
	//select the page based on the parameter passed in
	let onesection=document.querySelector("#section"+pgno);
	if (pgno =="2")
	{
		//show the page with flex display
		onesection.style.display="flex";
	}
	else
	{
		//show the page
		onesection.style.display="block";
	}
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
section1btn.addEventListener("click", function () {
	show(1);
});
section2btn.addEventListener("click", function () {
	show(2);
});
section3btn.addEventListener("click", function () {
	show(3);
});

/*for responsive menu */
const hamBtn=document.querySelector("#icon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");
function toggleMenus(){ /*open and close menu*/
	menuItemsList.classList.toggle("menuShow");
}

/* For image description */
function showDes(str){
	for(let onecomponent of allcomponent){ //go through all the components
		onecomponent.style.display="none"; //and hide them
	}
	switch(str){
		case 'boots':
			document.querySelector("#softBoots").style.display="block";
			break;
		case 'cuffs':
			document.querySelector("#cuff").style.display="block";
			break;
		case 'fasteners':
			document.querySelector("#fasteners").style.display="block";
			break;
		case 'shell':
			document.querySelector("#shell").style.display="block";
			break;
		case 'brake':
			document.querySelector("#brake").style.display="block";
			break;
		case 'wheels':
			document.querySelector("#wheel").style.display="block";
			break;
		case 'wheelFrame':
			document.querySelector("#frame").style.display="block";
			break;
		default:
			break;
	}
}


/* For Slideshow */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
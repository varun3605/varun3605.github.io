var menuBtn = document.querySelector(".menu-btn");
line1 = document.querySelector(".line-1");
line2 = document.querySelector(".line-2");
line3 = document.querySelector(".line-3");
navBar = document.querySelector("nav");
header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
	closeMobileNav();
});


$('nav ul li').find('a').click(function (e) {
	closeMobileNav();
	var $href = $(this).attr('href');
	var $anchor = $($href).offset();
	if($href == "./*"){
		return false;
	}
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $anchor.top
	});
	return false;
});

function closeMobileNav() {
	menuBtn.classList.toggle("close");
	navBar.classList.toggle("open");
	header.classList.toggle("white-bg");
}


$(".button_su_inner").mouseenter(function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle").css({
		"left": relX,
		"top": relY
	});
	$(this).prev(".su_button_circle").removeClass("desplode-circle");
	$(this).prev(".su_button_circle").addClass("explode-circle");

});

$(".button_su_inner").mouseleave(function (e) {

	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle").css({
		"left": relX,
		"top": relY
	});
	$(this).prev(".su_button_circle").removeClass("explode-circle");
	$(this).prev(".su_button_circle").addClass("desplode-circle");

});

$(".button_su_inner_border").mouseenter(function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle_border").css({
		"left": relX,
		"top": relY
	});
	$(this).prev(".su_button_circle_border").removeClass("desplode-circle_border");
	$(this).prev(".su_button_circle_border").addClass("explode-circle_border");

});

$(".button_su_inner_border").mouseleave(function (e) {

	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle_border").css({
		"left": relX,
		"top": relY
	});
	$(this).prev(".su_button_circle_border").removeClass("explode-circle_border");
	$(this).prev(".su_button_circle_border").addClass("desplode-circle_border");

});

//--------------------------------------------------
//Home Animated Text
//--------------------------------------------------
const typedTextSpan = document.querySelector(".animated-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
	"need technology to reveal the beauty of products",
	"believe in beautiful and smart design",
	// "need to build complex projects",
	"are striving for quality at all stages",
	// "believe in beautiful software",
];
const typingDelay = 20;
const erasingDelay = 20;
const newTextDelay = 5000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("typing"))
			cursorSpan.classList.add("typing");
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
}

function erase() {
	if (charIndex > 0) {
		if (!cursorSpan.classList.contains("typing"))
			cursorSpan.classList.add("typing");
		typedTextSpan.textContent = textArray[textArrayIndex].substring(
			0,
			charIndex - 1
		);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		setTimeout(type, typingDelay + 200);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// On DOM Load initiate the effect
	if (textArray.length) setTimeout(type, 1000);
});
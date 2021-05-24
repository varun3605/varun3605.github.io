var menuBtn = document.querySelector(".menu-btn"),
	navBar = document.querySelector("nav"),
	header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
	closeMobileNav();
});

function closeMobileNav() {
	menuBtn.classList.toggle("close");
	navBar.classList.toggle("open");
	header.classList.toggle("white-bg");
}

$(".button_su_inner").on("mouseenter tap", function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle").css({
		left: relX,
		top: relY,
	});
	$(this).prev(".su_button_circle").removeClass("desplode-circle");
	$(this).prev(".su_button_circle").addClass("explode-circle");
});

$(".button_su_inner").on("mouseleave tap", function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle").css({
		left: relX,
		top: relY,
	});
	$(this).prev(".su_button_circle").removeClass("explode-circle");
	$(this).prev(".su_button_circle").addClass("desplode-circle");
});

$(".button_su_inner_border").on("mouseenter tap", function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle_border").css({
		left: relX,
		top: relY,
	});
	$(this)
		.prev(".su_button_circle_border")
		.removeClass("desplode-circle_border");
	$(this).prev(".su_button_circle_border").addClass("explode-circle_border");
});

$(".button_su_inner_border").on("mouseleave tap", function (e) {
	var parentOffset = $(this).offset();

	var relX = e.pageX - parentOffset.left;
	var relY = e.pageY - parentOffset.top;
	$(this).prev(".su_button_circle_border").css({
		left: relX,
		top: relY,
	});
	$(this).prev(".su_button_circle_border").removeClass("explode-circle_border");
	$(this).prev(".su_button_circle_border").addClass("desplode-circle_border");
});

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

//Sağ menüyü aktifleştirme...
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

//Scroll işlemi ile header background getirme...
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function render(data) {
	var html = "<div class='comment_box'><div class='leftPanel'><img src='https://via.placeholder.com/70x70'></div><div class='rightPanel'><span> Nameee </span><div class='date'>Dateee</div><p>Bodyyyy</p></div><div class='clear'></div></div>";
	$('#containers').append(html);

}

$(document).ready(function () {
	var comments = [
		{ "name": "Hazal", "date": "10 Apr, 2021", "body": "helloooo" },
		{ "name": "Hazal", "date": "10 Apr, 2021", "body": "helloooo" },
		{ "name": "Hazal", "date": "10 Apr, 2021", "body": "helloooo" }
	];
	for (var i = 0; i < comments.length; i++) {
		render(comments[i]);
	}
	$('#addComment').click(function () {
		var addObj = {
			"name": $('#name').val(),
			"date": $('#date').val(),
			"body": $('#bodyText').val()
		};
		console.log(addObj);
		comments.push(addObj);
		render(addObj);

	});
}); 
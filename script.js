var body = document.querySelector('body');
var a = document.querySelectorAll('a');
var nav = document.querySelector('nav');
var menu = document.querySelectorAll('.menu');
var post = document.querySelectorAll('.post');
var footer = document.querySelector('footer');
function toggleW(eId){
	var el = document.getElementById(eId);
	if (el.style.width == '50%'){
		el.style.width = '0';
		el.style.height = '0';
	} else {
		el.style.width = '50%';
		el.style.height = '250px';
	}
}
function signUp(){
	document.getElementById('signin').style.display = 'none';
	document.getElementById('ask').style.display = 'none';
	document.getElementById('signt').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}
function hMode(){
	body.style.background = '#00f';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#0ff';
	}
	nav.style.background = '#f23700';
	footer.style.background = '#f23700';
	for(i=0;i<menu.length;i++){
		menu[i].style.background = '#f23700';
	}
	for(i=0;i<post.length;i++){
		post[i].classList.remove("lite");
		post[i].classList.remove("dark");
		post[i].classList.add("happy");
	}
}
function dMode(){
	body.style.background = '#222';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#ff0';
	}
	nav.style.background = '#444';
	footer.style.background = '#444';
	for(i=0;i<menu.length;i++){
		menu[i].style.background = '#121212';
	}
	for(i=0;i<post.length;i++){
		post[i].classList.remove("lite");
		post[i].classList.remove("happy");
		post[i].classList.add("dark");
	}
}
function lMode(){
	body.style.background = '#ababab';
	for(i=0;i<a.length;i++){
		a[i].style.color = '#005';
	}
	nav.style.background = '#888';
	footer.style.background = '#888';
	for(i=0;i<menu.length;i++){
		menu[i].style.background = '#676767';
	}
	for(i=0;i<post.length;i++){
		post[i].classList.remove("dark");
		post[i].classList.remove("happy");
		post[i].classList.add("lite");
	}
}
function search(){
	var sch = document.querySelector('#sch').value;
	for(i=0;i<post.length;i++){
		sch = sch.toLowerCase();
		if(post[i].innerText.toLowerCase().includes(sch)){
			post[i].style.display = 'block';
			console.log('block display');
		} else {
			post[i].style.display = 'none';
			console.log('none display');
		}
	}
}
function filt(flg){
	for(i=0;i<post.length;i++){
		if(post[i].innerHTML.toLowerCase().includes(flg)){
			post[i].style.display = 'block';
		} else {
			post[i].style.display = 'none';
		}
	}
}
function pass(){
let password = '052004';
let picturePass = 'pic2004';

let passwordInput=prompt('Въведете вашата парола!','');

if (passwordInput === password) {
location.href='/p/blog-page_92.html';
} else if(passwordInput === picturePass) {
location.href='/p/blog-page_15.html';
} else {
alert('Грешна парола');
return location.href='/';
}

}

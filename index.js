let menav = document.querySelector("#me");
let projNav = document.querySelector("#proj");
let skillNav = document.querySelector("#skills");

menav.addEventListener('mouseover',()=>menav.style.color='white');
projNav.addEventListener('mouseover',()=>projNav.style.color='white');
skillNav.addEventListener('mouseover',()=>skillNav.style.color='white');

menav.addEventListener('mouseout',()=>menav.style.color='#433520');
projNav.addEventListener('mouseout',()=>projNav.style.color='#433520');
skillNav.addEventListener('mouseout',()=>skillNav.style.color='#433520');
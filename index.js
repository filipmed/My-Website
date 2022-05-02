let menav = document.querySelector("#me");
let projNav = document.querySelector("#proj");
let skillNav = document.querySelector("#skills");

menav.addEventListener('mouseover',()=>menav.style.color='#FF2E63');
projNav.addEventListener('mouseover',()=>projNav.style.color='#FF2E63');
skillNav.addEventListener('mouseover',()=>skillNav.style.color='#FF2E63');

menav.addEventListener('mouseout',()=>menav.style.color='#EAEAEA');
projNav.addEventListener('mouseout',()=>projNav.style.color='#EAEAEA');
skillNav.addEventListener('mouseout',()=>skillNav.style.color='#EAEAEA');
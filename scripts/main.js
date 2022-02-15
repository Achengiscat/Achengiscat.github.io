 let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/j20.jpg') {
      myImage.setAttribute('src', 'images/laopo.png');
    } else {
      myImage.setAttribute('src', 'images/laopo.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
}
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '德华不是笨比，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}

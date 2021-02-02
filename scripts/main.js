
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpg') {
      myImage.setAttribute('src', 'images/pic2.jpg');
    } else {
      myImage.setAttribute('src', 'images/pic1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}